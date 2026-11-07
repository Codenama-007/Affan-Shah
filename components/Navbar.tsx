"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react";
import { getLenis } from "@/components/SmoothScroll";
import { navItems, site } from "@/data/site";
import { projects } from "@/data/projects";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function useIstClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(timeFormatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export default function Navbar({ buildStamp }: { buildStamp: string }) {
  // The index is open for the route it was opened on. A navigation changes the
  // pathname, so the mobile panel closes without a state-setting effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [section, setSection] = useState("top");
  const pathname = usePathname();
  const isOpen = openPath === pathname;
  const setIsOpen = (open: boolean) =>
    setOpenPath(open ? pathname : null);
  const time = useIstClock();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Scroll spy: on the home record, the rail reports where you actually are.
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navItems.flatMap((item) =>
      item.section ? [item.section] : []
    );
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setSection(visible[0].target.id);
      },
      { rootMargin: "-16% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Escape closes the mobile index and returns focus to the trigger.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Never leave the page scroll-locked if the viewport becomes desktop-sized.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenPath(null);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);

    if (!href.startsWith("/#")) return;

    const el = document.getElementById(href.slice(2));
    if (!el) return;

    event.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { offset: -64, duration: 1 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", href);
    setSection(href.slice(2));
  };

  const isItemActive = (href: string, itemSection?: string | null) => {
    if (itemSection === "work" && pathname === "/projects") return true;
    if (itemSection && pathname === "/") return section === itemSection;
    if (href === "/projects") return pathname === "/projects";
    if (href === "/contact") return pathname === "/contact";
    return false;
  };

  const itemAriaCurrent = (href: string, itemSection?: string | null) => {
    if (!isItemActive(href, itemSection)) return undefined;
    return href.startsWith("/#") ? ("location" as const) : ("page" as const);
  };

  const index = navItems.map((item, i) => ({
    ...item,
    index: String(i + 1).padStart(2, "0"),
    count: item.section === "work" ? projects.length : null,
  }));

  const activeItem = index.find((item) =>
    isItemActive(item.href, item.section)
  );
  const position = activeItem?.label ?? "Index";

  return (
    <>
      {/* System bar */}
      <header className="fixed inset-x-0 top-0 z-50 h-12 border-b border-rule bg-background/95 backdrop-blur-sm">
        <div className="flex h-full items-center justify-between gap-4 pl-4 pr-3 lg:pl-6 lg:pr-5">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/"
              className="font-mono text-[0.78rem] font-semibold tracking-[0.16em] text-amber uppercase"
            >
              Affan Shah
            </Link>
            <span className="hidden truncate font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase sm:inline">
              Developer record / 2026
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 font-mono text-[0.63rem] tracking-[0.14em] text-muted uppercase sm:flex">
              <span
                className="text-foreground tabular-nums"
                suppressHydrationWarning
              >
                {time || "--:--:--"}
              </span>
              <span>IST</span>
            </span>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="-mr-1 inline-flex h-11 w-11 items-center justify-center text-amber lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-index"
              aria-label={isOpen ? "Close index" : "Open index"}
            >
              {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Persistent index — the record's spine */}
      <aside className="fixed bottom-0 left-0 top-12 z-40 hidden w-[272px] flex-col border-r border-rule bg-background lg:flex">
        <div className="border-b border-rule px-5 py-5">
          <p className="font-mono text-[0.62rem] tracking-[0.18em] text-amber uppercase">
            Record {site.record}
          </p>
          <p className="mt-2 font-mono text-[1.05rem] font-semibold tracking-[0.04em] text-foreground uppercase">
            {site.name}
          </p>
          <p className="mt-1 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase">
            {site.shortRole}
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-[0.62rem] leading-relaxed tracking-[0.1em] text-muted uppercase">
            <span className="status-dot mt-[0.3rem]" aria-hidden="true" />
            {site.availabilityShort}
          </p>
        </div>

        <nav aria-label="Record index" className="flex-1 overflow-y-auto p-2">
          <ul>
            {index.map((item) => {
              const active = isItemActive(item.href, item.section);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={itemAriaCurrent(item.href, item.section)}
                    className={`flex min-h-11 items-center gap-3 border-l-2 px-3 font-mono text-[0.76rem] tracking-[0.12em] uppercase transition-colors ${
                      active
                        ? "border-amber bg-panel text-foreground"
                        : "border-transparent text-muted hover:border-line hover:bg-panel hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`text-[0.62rem] tabular-nums ${
                        active ? "text-amber" : "text-dim"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {item.count !== null && (
                      <span className="text-[0.62rem] tabular-nums text-dim">
                        {String(item.count).padStart(2, "0")}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-rule p-3">
          <a
            href={site.cvPath}
            download
            className="btn-ghost w-full"
            aria-label="Download CV as PDF"
          >
            <Download size={13} aria-hidden="true" />
            Download CV
          </a>

          <div className="mt-2 grid grid-cols-3 gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center justify-center gap-1 font-mono text-[0.62rem] tracking-[0.08em] text-muted uppercase transition-colors hover:text-amber"
            >
              GitHub
              <ArrowUpRight size={9} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center justify-center gap-1 font-mono text-[0.62rem] tracking-[0.08em] text-muted uppercase transition-colors hover:text-amber"
            >
              LinkedIn
              <ArrowUpRight size={9} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex min-h-10 items-center justify-center gap-1 font-mono text-[0.62rem] tracking-[0.08em] text-muted uppercase transition-colors hover:text-amber"
            >
              <Mail size={9} aria-hidden="true" />
              Email
            </a>
          </div>

          <dl className="mt-2 space-y-1 border-t border-rule pt-3 font-mono text-[0.6rem] uppercase tracking-[0.1em]">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-muted">Section</dt>
              <dd className="text-foreground">{position}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-muted">Build</dt>
              <dd className="text-foreground tabular-nums">{buildStamp}</dd>
            </div>
          </dl>
        </div>
      </aside>

      {/* Mobile index */}
      {isOpen && (
        <div
          id="mobile-index"
          data-lenis-prevent
          className="fixed inset-x-0 bottom-0 top-12 z-40 overflow-y-auto border-t border-rule bg-background lg:hidden"
        >
          <div className="px-5 py-6">
            <p className="font-mono text-[0.62rem] tracking-[0.18em] text-amber uppercase">
              Record {site.record}
            </p>
            <p className="mt-2 font-mono text-xl font-semibold tracking-[0.04em] uppercase">
              {site.name}
            </p>
            <p className="mt-1 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase">
              {site.shortRole}
            </p>

            <nav aria-label="Record index" className="mt-6 border-t border-rule">
              <ul>
                {index.map((item, i) => {
                  const active = isItemActive(item.href, item.section);
                  return (
                    <li key={item.href}>
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        aria-current={itemAriaCurrent(item.href, item.section)}
                        className={`flex min-h-14 items-center gap-4 border-b border-rule font-mono text-sm tracking-[0.1em] uppercase ${
                          active ? "text-amber" : "text-foreground"
                        }`}
                      >
                        <span className="text-[0.62rem] text-dim tabular-nums">
                          {item.index}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        {item.count !== null && (
                          <span className="text-[0.62rem] text-dim tabular-nums">
                            {String(item.count).padStart(2, "0")}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 space-y-2">
              <a href={site.cvPath} download className="btn w-full">
                <Download size={13} aria-hidden="true" />
                Download CV
              </a>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "GitHub", href: site.github, external: true },
                  { label: "LinkedIn", href: site.linkedin, external: true },
                  { label: "Email", href: `mailto:${site.email}` },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex min-h-11 items-center justify-center border border-line font-mono text-[0.62rem] tracking-[0.08em] text-muted uppercase"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="pt-2 font-mono text-[0.62rem] tracking-[0.1em] text-muted uppercase">
                <span className="text-foreground tabular-nums" suppressHydrationWarning>
                  {time || "--:--:--"}
                </span>{" "}
                IST
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
