"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Venture", "Expertise", "AI", "Connect"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold">
            SK
          </span>
          <span className="text-sm font-semibold tracking-wide hidden sm:block">
            Shikhil Kumar Gupta
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="https://cal.com/shikhilkumargupta/connect?duration=30&overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-background/95 backdrop-blur-xl border-b border-foreground/5">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://cal.com/shikhilkumargupta/connect?duration=30&overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg bg-accent text-white text-center hover:bg-accent/90 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
