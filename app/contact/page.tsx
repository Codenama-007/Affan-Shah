import Navbar from "@/components/Navbar";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";
import { Mail, Phone, ExternalLink } from "lucide-react";

export const metadata = {
  title: "COMMUNICATION TERMINAL // AFFAN SHAH",
  description: "Open a communication channel with the developer.",
};

export default function ContactPage() {
  return (
    <>
      <CRTOverlay />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="text-[0.9rem] tracking-[0.3em] text-[#777777] uppercase mb-2">
                COMMUNICATION TERMINAL
              </div>
              <div className="text-[0.9rem] tracking-[0.2em] text-[#777777] uppercase">
                OPEN CHANNEL — SEND A MESSAGE TO THE DEVELOPER
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Form */}
              <div className="flex-1 max-w-2xl">
                <ContactForm />
              </div>

              {/* Direct Channels */}
              <div className="flex-1">
                <div className="terminal-panel">
                  <div className="section-heading">DIRECT CHANNELS</div>
                  <div className="space-y-4">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-[0.9rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
                    >
                      <Phone size={14} className="text-[#FF6500]" />
                      <span>+1 234 567 890</span>
                    </a>
                    <a
                      href="mailto:your@email.com"
                      className="flex items-center gap-3 text-[0.9rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
                    >
                      <Mail size={14} className="text-[#FF6500]" />
                      <span>YOUR@EMAIL.COM</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-[0.9rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
                    >
                      <ExternalLink size={14} className="text-[#FF6500]" />
                      <span>GITHUB</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-[0.9rem] tracking-[0.1em] text-[#777777] hover:text-[#FF6500] transition-colors uppercase"
                    >
                      <ExternalLink size={14} className="text-[#FF6500]" />
                      <span>LINKEDIN</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
