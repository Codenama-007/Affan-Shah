"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

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
        throw new Error(data.error || "Transmission failed.");
      }

      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transmission failed.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="terminal-panel text-center py-12" role="status" aria-live="polite">
        <CheckCircle className="mx-auto mb-4 text-[#FF8A24]" size={32} />
        <div className="text-[0.9rem] tracking-[0.2em] text-[#FF8A24] uppercase mb-2">
          MESSAGE TRANSMITTED
        </div>
        <div className="text-[0.85rem] tracking-[0.15em] text-[#777777] mb-6">
          YOUR COMMUNICATION HAS BEEN RECEIVED.
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="terminal-btn"
        >
          [ SEND ANOTHER ]
        </button>
      </div>
    );
  }

  return (
    <div className="terminal-panel">
      <div className="section-heading">COMMUNICATION CHANNEL</div>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot: hidden from humans and assistive tech */}
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

        <div>
          <label
            htmlFor="name"
            className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1"
          >
            NAME
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
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1"
          >
            EMAIL
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
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={update("message")}
            required
            maxLength={5000}
            rows={5}
            className="terminal-input resize-none"
            placeholder="Enter your message"
          />
        </div>

        <div aria-live="polite">
          {status === "error" && (
            <div className="flex items-start gap-2 border border-[#FF6500]/40 bg-[#FF6500]/5 px-3 py-2 mb-4">
              <AlertTriangle size={12} className="mt-0.5 shrink-0 text-[#FF6500]" />
              <span className="text-[0.8rem] tracking-[0.1em] text-[#FF6500] uppercase">
                {error}
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="terminal-btn flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={12} />
          {status === "sending" ? "TRANSMITTING…" : "TRANSMIT MESSAGE"}
        </button>
      </form>
    </div>
  );
}
