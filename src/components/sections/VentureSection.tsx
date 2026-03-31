import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function VentureSection() {
  return (
    <section id="venture" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Venture
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What I&apos;m Building
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-14 relative p-8 sm:p-10 rounded-2xl border border-foreground/5 bg-surface/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-accent/[0.05] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/[0.03] rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">AI Startup</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-medium tracking-wide uppercase">
                      Stealth
                    </span>
                  </div>
                  <p className="text-sm text-muted mt-0.5">Founder & CTO</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                Building an AI-native product that reimagines how businesses
                interact with intelligent systems. Combining my deep backend
                expertise with cutting-edge AI to create something
                that doesn&apos;t exist yet.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-6 pt-8 border-t border-foreground/5">
                {[
                  { label: "Stage", value: "Building" },
                  { label: "Domain", value: "AI / LLMs" },
                  { label: "Role", value: "Technical Founder" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted/50 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["LLMs", "AI Agents", "RAG", "Product-Led Growth", "0→1"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
