import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SocialLink from "@/components/SocialLink";

const EXPERTISE = [
  {
    title: "Distributed Systems",
    desc: "Designing fault-tolerant, horizontally scalable architectures that serve millions of requests with high availability.",
    tags: ["Kafka", "gRPC", "Event-Driven", "Microservices"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "API Design",
    desc: "Crafting clean, well-documented RESTful and event-driven APIs with a focus on developer experience and performance.",
    tags: ["REST", "GraphQL", "OpenAPI", "Webhooks"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Cloud Infrastructure",
    desc: "Building cloud-native solutions with infrastructure as code, container orchestration, and automated CI/CD pipelines.",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Data Systems",
    desc: "Engineering high-throughput data pipelines, optimizing database performance, and designing caching strategies at scale.",
    tags: ["PostgreSQL", "Redis", "Pipelines", "Sharding"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/shikhilg",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shikhilg/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/shikhil_gupta",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:shikhilgupta.work@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  "Go", "Python", "Java", "Node.js",
  "PostgreSQL", "Redis", "Kafka", "gRPC",
  "Docker", "Kubernetes", "AWS", "Terraform",
  "LangChain", "LlamaIndex", "OpenAI", "RAG",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
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
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
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
                <span className="gradient-text">
                  Shikhil
                </span>
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
                  href="https://github.com/shikhilg"
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

            {/* Inline code snippet */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="mt-14 p-4 rounded-xl bg-surface/80 border border-foreground/5 font-mono text-xs sm:text-sm text-muted max-w-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-[10px] text-muted/50">~/shikhil</span>
                </div>
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground/70">whoami</span>
                </p>
                <p className="text-foreground/50 mt-1">founder &amp; engineer</p>
                <p className="mt-2">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground/70">echo $STATUS</span>
                </p>
                <p className="text-foreground/50 mt-1">
                  building-ai-startup --mode=stealth
                </p>
                <p className="mt-2">
                  <span className="text-accent">$</span>{" "}
                  <span className="animate-blink text-foreground/70">_</span>
                </p>
              </div>
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

      {/* ─── About ─── */}
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
              <span className="gradient-text">
                founder
              </span>
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

          {/* Tech stack */}
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

      {/* ─── Venture ─── */}
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
                    <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Expertise ─── */}
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
                        <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI & Intelligence ─── */}
      <section id="ai" className="py-28 sm:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              AI & Intelligence
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Building the{" "}
              <span className="gradient-text">
                AI-native
              </span>{" "}
              future
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              Beyond traditional backend work, I design and build intelligent
              systems that leverage large language models, autonomous agents, and
              retrieval-augmented generation to solve real-world problems.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <AnimateOnScroll delay={250}>
              <div className="group relative h-full p-7 rounded-2xl border border-foreground/5 bg-surface/30 hover:border-accent/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/[0.08] transition-colors duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Agents</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Designing autonomous agents with tool use, multi-step
                    reasoning, and memory — capable of executing complex
                    workflows with minimal human oversight.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {["LangChain", "CrewAI", "Tool Use", "Multi-Agent"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <div className="group relative h-full p-7 rounded-2xl border border-foreground/5 bg-surface/30 hover:border-accent/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/[0.08] transition-colors duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Prompt Engineering</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Crafting precise, reliable prompt strategies — from
                    chain-of-thought and few-shot patterns to structured outputs
                    and systematic evaluation frameworks.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {["Chain-of-Thought", "Few-Shot", "Evals", "Guardrails"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={450}>
              <div className="group relative h-full p-7 rounded-2xl border border-foreground/5 bg-surface/30 hover:border-accent/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/[0.08] transition-colors duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">RAG Systems</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Building retrieval-augmented generation pipelines — from
                    vector stores and embedding strategies to hybrid search and
                    context-aware response grounding.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {["LlamaIndex", "Pinecone", "Embeddings", "Hybrid Search"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-accent/5 text-[11px] font-mono text-accent/70">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Connect ─── */}
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
              href="mailto:shikhilgupta.work@gmail.com"
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

      {/* ─── Footer ─── */}
      <footer className="py-8 px-6 border-t border-foreground/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-white text-[9px] font-bold">
              SK
            </span>
            <p className="text-xs text-muted/60">
              &copy; {new Date().getFullYear()} Shikhil Kumar Gupta
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
