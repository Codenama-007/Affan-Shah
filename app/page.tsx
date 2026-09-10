import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";

export default function Home() {
  return (
    <>
      <CRTOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-heading">OPEN COMMUNICATION CHANNEL</div>
            <div className="max-w-2xl" data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
