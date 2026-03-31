import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TECH_STACK } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            About
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
            From engineer to{" "}
            <span className="gradient-text">founder</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-16">
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              I&apos;ve spent years mastering backend engineering — building
              distributed systems, designing scalable APIs, and shipping
              production infrastructure. That deep technical foundation is now
              the engine behind my entrepreneurial journey.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Today, I&apos;m channeling everything I&apos;ve learned into building
              my own AI startup. I believe the best founders are the ones who
              can go deep on the tech, think critically about the product, and
              move fast when it matters.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="mt-16 pt-10 border-t border-foreground/5">
            <p className="text-xs tracking-[0.2em] uppercase text-muted/60 mb-6">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-foreground/8 bg-background text-sm text-foreground/70 font-mono hover:border-accent/30 hover:text-accent transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
