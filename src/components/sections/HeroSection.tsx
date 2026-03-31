import { SITE_CONFIG } from "@/lib/constants";
import TerminalTyping from "@/components/TerminalTyping";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[120px] animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.02] blur-[80px] animate-pulse-slow" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs tracking-wide mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              Currently building in stealth
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Shikhil</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium text-muted">
              Engineer. Entrepreneur. Builder.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <p className="mt-6 text-base sm:text-lg text-muted/80 leading-relaxed max-w-xl">
              I build products and companies at the intersection of backend
              engineering and AI. Currently founding an AI startup in stealth,
              turning deep technical expertise into real-world solutions.
            </p>
          </div>

          {/* CTA row */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors duration-300"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-foreground/10 text-sm font-medium hover:border-foreground/20 hover:bg-foreground/[0.03] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          {/* Animated terminal */}
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <TerminalTyping />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <div className="w-5 h-8 border border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-1.5 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
