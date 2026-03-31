import AnimateOnScroll from "@/components/AnimateOnScroll";
import { EXPERTISE } from "@/lib/constants";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 sm:py-36 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Expertise
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What I Do Best
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
            I focus on the foundational layers that make products reliable,
            fast, and ready to grow — from system design to production
            infrastructure.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {EXPERTISE.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={250 + i * 80}>
              <div className="group relative h-full p-7 rounded-2xl border border-foreground/5 bg-background hover:border-accent/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/[0.08] transition-colors duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
