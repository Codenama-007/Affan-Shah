"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT ME", href: "/#about" },
  { label: "EDUCATION", href: "/#education" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
  { label: "BLOGS", href: "/blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const el = document.getElementById(href.slice(2));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-sm border-b border-[#454545]"
          : "bg-[#050505]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#FF6500] font-bold text-sm tracking-[0.2em]">
              {"// AFFAN SHAH"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/" && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-[0.9rem] tracking-[0.15em] uppercase transition-colors ${
                    isActive
                      ? "text-[#FF6500]"
                      : "text-[#777777] hover:text-[#EAEAEA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/cv/cv.pdf"
              download
              className="ml-4 border border-[#FF6500] px-3 py-1.5 text-[0.8rem] tracking-[0.15em] uppercase text-[#FF6500] hover:bg-[#FF6500] hover:text-[#050505] transition-all"
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#FF6500] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#454545]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block px-3 py-3 text-[0.95rem] tracking-[0.15em] uppercase border-l-2 transition-colors ${
                    isActive
                      ? "border-[#FF6500] text-[#FF6500] bg-[#FF6500]/5"
                      : "border-transparent text-[#777777] hover:text-[#EAEAEA] hover:border-[#454545]"
                  }`}
                >
                  <span className="text-[#454545] mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/cv/cv.pdf"
              download
              className="flex items-center justify-center border border-[#FF6500] px-3 py-3 mt-4 text-[0.9rem] tracking-[0.15em] uppercase text-[#FF6500] hover:bg-[#FF6500] hover:text-[#050505] transition-all"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
