"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Message transmitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="terminal-panel text-center py-12">
        <CheckCircle className="mx-auto mb-4 text-[#FF8A24]" size={32} />
        <div className="text-[0.9rem] tracking-[0.2em] text-[#FF8A24] uppercase mb-2">
          MESSAGE TRANSMITTED
        </div>
        <div className="text-[0.85rem] tracking-[0.15em] text-[#777777]">
          YOUR COMMUNICATION HAS BEEN RECEIVED.
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-panel">
      <div className="section-heading">COMMUNICATION CHANNEL</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1">
            NAME
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="terminal-input"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1">
            EMAIL
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="terminal-input"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-1">
            MESSAGE
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="terminal-input resize-none"
            placeholder="Enter your message"
          />
        </div>
        <button type="submit" className="terminal-btn flex items-center gap-2">
          <Send size={12} />
          TRANSMIT MESSAGE
        </button>
      </form>
    </div>
  );
}
