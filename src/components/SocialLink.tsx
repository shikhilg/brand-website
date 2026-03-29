"use client";

import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300"
    >
      {children}
    </a>
  );
}
