import type { Metadata } from "next";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/Contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Affan Shah, an AI and full-stack developer. Open to project work, collaboration, and professional inquiries.",
  alternates: {
    canonical: "https://affanshahai.vercel.app/contact",
  },
};

const directLinks = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "GitHub",
    value: site.githubLabel,
    href: site.github,
    icon: ArrowUpRight,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
    icon: ArrowUpRight,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="pb-20 pt-10 lg:pb-28 lg:pt-14">
      <div className="shell-container">
        <header className="section-head">
          <p className="section-label">Contact</p>
          <div>
            <h1 className="page-title">Start a conversation.</h1>
            <p className="section-lede mt-4">
              If you are building retrieval, agent, or product systems and need
              someone who can own the path from pipeline to interface, tell me
              what you are working on.
            </p>
          </div>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                Send a message
              </h2>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-dim">
                Usually answered in 1–2 days
              </p>
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside aria-label="Direct contact details" className="self-start">
            <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                Direct
              </h2>
              <p className="flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-success">
                <span className="status-dot" aria-hidden="true" />
                {site.availabilityShort}
              </p>
            </div>

            <div>
              {directLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.label} className="border-b border-rule">
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex min-h-14 items-center justify-between gap-4 py-3"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon
                          size={13}
                          aria-hidden="true"
                          className="shrink-0 text-amber"
                        />
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.58rem] uppercase tracking-[0.14em] text-dim">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[0.88rem] text-foreground transition-colors group-hover:text-amber">
                            {link.value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        size={12}
                        aria-hidden="true"
                        className="shrink-0 text-dim transition-colors group-hover:text-amber"
                      />
                    </a>
                  </div>
                );
              })}
            </div>

            <a href={site.cvPath} download className="btn-ghost mt-6 w-full">
              <Download size={13} aria-hidden="true" />
              Download CV
            </a>

            <p className="mt-6 border-t border-rule pt-4 text-[0.82rem] leading-relaxed text-muted">
              Based in {site.location}. Available for AI engineering and
              full-stack roles, freelance builds, and collaborations.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
