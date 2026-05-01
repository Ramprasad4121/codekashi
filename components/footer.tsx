export default function Footer() {
  return (
    <footer className="py-10 max-w-5xl mx-auto border-t border-white/[0.04]">
      <div className="flex items-center justify-between px-8">
        <span className="font-mono text-xs text-[var(--text-muted)]">
          © 2026 Ramprasad
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shadow-[0_0_6px_var(--accent-green)]" />
        </div>
      </div>
    </footer>
  )
}
