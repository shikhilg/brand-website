import AnimateOnScroll from "@/components/AnimateOnScroll";
import SocialLink from "@/components/SocialLink";
import { SOCIALS, SITE_CONFIG } from "@/lib/constants";

export default function ConnectSection() {
  return (
    <section id="connect" className="py-28 sm:py-36 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
            Connect
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s Build Something Great
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            Whether you have a project in mind, want to discuss backend
            architecture, or just want to connect — I&apos;d love to hear from
            you.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="mt-10 flex items-center justify-center gap-4">
            {SOCIALS.map((social) => (
              <SocialLink
                key={social.name}
                href={social.href}
                label={social.name}
              >
                {social.icon}
              </SocialLink>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors duration-300"
          >
            Say Hello
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
