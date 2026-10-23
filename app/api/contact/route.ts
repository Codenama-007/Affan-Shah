import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  /** Honeypot field. Real users never see or fill this. */
  company?: string;
};

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-instance throttle. It stops casual form-spam loops, but it is
// not a substitute for a real rate limiter across serverless instances.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many transmissions. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  // Honeypot filled in: pretend success so bots don't learn anything.
  if ((body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "NAME, EMAIL and MESSAGE are required." },
      { status: 400 }
    );
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json(
      { error: "Message exceeds the maximum length." },
      { status: 413 }
    );
  }

  // Reject header-injection attempts as well as malformed addresses.
  if (!EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(`[contact] Missing configuration: ${missing.join(", ")}`);

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Channel offline: missing ${missing.join(", ")} in .env.local`
            : "Communication channel is offline. Please email me directly.",
      },
      { status: 503 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  const port = Number(SMTP_PORT);
  const safeName = name.replace(/[\r\n]+/g, " ");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Terminal" <${SMTP_USER}>`,
      to: MAIL_TO,
      // Replies go straight back to the visitor; the envelope sender stays
      // authenticated so SPF/DKIM keep passing.
      replyTo: email,
      subject: `[PORTFOLIO] New transmission from ${safeName}`,
      text: `NAME: ${name}\nEMAIL: ${email}\n\nMESSAGE:\n${message}`,
      html: `
        <div style="background:#050505;color:#EAEAEA;padding:24px;font-family:ui-monospace,monospace">
          <p style="color:#FF6500;letter-spacing:2px;margin:0 0 16px">NEW TRANSMISSION // PORTFOLIO</p>
          <p style="margin:4px 0"><span style="color:#777777">NAME:</span> ${escapeHtml(name)}</p>
          <p style="margin:4px 0"><span style="color:#777777">EMAIL:</span> ${escapeHtml(email)}</p>
          <hr style="border:0;border-top:1px solid #454545;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>`,
    });
  } catch (error) {
    console.error("[contact] sendMail failed:", error);
    return NextResponse.json(
      { error: "Transmission failed. Please email me directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
