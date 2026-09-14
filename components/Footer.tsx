import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#454545] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA */}
        <div className="text-center mb-12" data-reveal>
          <div className="text-[0.9rem] tracking-[0.2em] text-[#777777] uppercase mb-4">
            NEED A WEBSITE FOR YOUR BUSINESS?
          </div>
          <div className="text-[1.1rem] tracking-wide text-[#EAEAEA] mb-6">
            Let&apos;s build a fast, modern website designed around your business.
          </div>
          <Link href="/contact" className="terminal-btn inline-block">
            [ START A PROJECT ]
          </Link>
        </div>

        <div className="border-t border-[#454545] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              <a
                href="mailto:affanjavedshah@student.sfit.ac.in"
                className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
              >
                <Mail size={12} />
                AFFANJAVEDSHAH@STUDENT.SFIT.AC.IN
              </a>
              <a
                href="tel:+917820986147"
                className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
              >
                <Phone size={12} />
                +91 7820986147
              </a>
              <a
                href="https://github.com/Codenama-007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
              >
                <ExternalLink size={12} />
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/affanjavedshah?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
              >
                <ExternalLink size={12} />
                LINKEDIN
              </a>
              <a
                href="https://www.instagram.com/salar79275?utm_source=qr&igsh=ZTYwM3B3YWJmdDNq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
              >
                <ExternalLink size={12} />
                INSTAGRAM
              </a>
            </div>

            {/* System Status */}
            <div className="text-center sm:text-right">
              <div className="text-[0.7rem] tracking-[0.15em] text-[#777777] uppercase">
                AFFAN SHAH // DEVELOPER TERMINAL
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-end mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A24]" />
                <span className="text-[0.65rem] tracking-[0.15em] text-[#FF8A24] uppercase">
                  SYSTEM STATUS: ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
