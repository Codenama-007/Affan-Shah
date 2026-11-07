"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const emptyForm = { name: "", email: "", message: "", company: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (field: keyof typeof emptyForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "The message could not be sent.");
      }

      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "The message could not be sent."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-line p-8" role="status" aria-live="polite">
        <CheckCircle className="mb-4 text-amber" size={28} aria-hidden="true" />
        <h2 className="section-title">Message sent.</h2>
        <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-relaxed text-muted">
          Thanks for reaching out. I read everything and usually reply within a
          couple of days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from humans and assistive tech. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            required
            maxLength={100}
            autoComplete="name"
            className="terminal-input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            required
            maxLength={200}
            autoComplete="email"
            inputMode="email"
            className="terminal-input"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update("message")}
          required
          maxLength={5000}
          rows={7}
          className="terminal-input resize-y"
          placeholder="What are you building?"
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <div className="flex items-start gap-2 border border-amber/40 bg-amber/5 px-3 py-2.5">
            <AlertTriangle
              size={13}
              className="mt-0.5 shrink-0 text-amber"
              aria-hidden="true"
            />
            <span className="text-[0.85rem] leading-relaxed text-amber">
              {error} You can also email{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-2"
              >
                {site.email}
              </a>
              .
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={13} aria-hidden="true" />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
          Or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
