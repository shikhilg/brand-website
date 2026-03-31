export default function Footer() {
  return (
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
  );
}
