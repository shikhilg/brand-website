"use client";

import { useEffect, useState } from "react";

interface TerminalLine {
  command: string;
  output: string;
}

const LINES: TerminalLine[] = [
  { command: "whoami", output: "founder & engineer" },
  { command: "echo $STATUS", output: "building-ai-startup --mode=stealth" },
];

const TYPE_SPEED = 60;
const LINE_PAUSE = 400;
const OUTPUT_PAUSE = 200;

export default function TerminalTyping() {
  const [visibleLines, setVisibleLines] = useState<
    { command: string; output: string; typing: boolean }[]
  >([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function animate() {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        const { command, output } = LINES[i];

        setVisibleLines((prev) => [
          ...prev,
          { command: "", output: "", typing: true },
        ]);

        for (let c = 0; c <= command.length; c++) {
          if (cancelled) return;
          const partial = command.slice(0, c);
          setVisibleLines((prev) => {
            const next = [...prev];
            next[i] = { command: partial, output: "", typing: true };
            return next;
          });
          await new Promise((r) => setTimeout(r, TYPE_SPEED));
        }

        await new Promise((r) => setTimeout(r, OUTPUT_PAUSE));
        if (cancelled) return;

        setVisibleLines((prev) => {
          const next = [...prev];
          next[i] = { command, output, typing: false };
          return next;
        });

        if (i < LINES.length - 1) {
          await new Promise((r) => setTimeout(r, LINE_PAUSE));
        }
      }

      if (!cancelled) setDone(true);
    }

    animate();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-14 p-4 rounded-xl bg-surface/80 border border-foreground/5 font-mono text-xs sm:text-sm text-muted max-w-md">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[10px] text-muted/50">~/shikhil</span>
      </div>

      {visibleLines.map((line, i) => (
        <div key={i} className={i > 0 ? "mt-2" : ""}>
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-foreground/70">{line.command}</span>
            {line.typing && (
              <span className="animate-blink text-foreground/70">_</span>
            )}
          </p>
          {line.output && (
            <p className="text-foreground/50 mt-1">{line.output}</p>
          )}
        </div>
      ))}

      {done && (
        <p className="mt-2">
          <span className="text-accent">$</span>{" "}
          <span className="animate-blink text-foreground/70">_</span>
        </p>
      )}
    </div>
  );
}
