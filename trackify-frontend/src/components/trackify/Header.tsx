import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 -z-10 bg-[oklch(0.13_0.018_280/0.7)] backdrop-blur-xl border-b border-border-subtle" />
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="grid place-items-center w-9 h-9 rounded-xl"
            style={{ background: "var(--grad-primary)", boxShadow: "var(--shadow-glow-violet)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="white" />
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Trackify</p>
            <p className="text-[11px] text-text-muted">Playlist Intelligence</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn btn-ghost h-9 px-3 text-[13px]">Features</a>
          <a href="#calculator" className="btn btn-ghost h-9 px-3 text-[13px]">Calculator</a>
          <a href="#how" className="btn btn-ghost h-9 px-3 text-[13px]">How it works</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary h-9 px-3 text-[13px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18.92-.26 1.92-.39 2.9-.39.99 0 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.74.12 3.03.74.8 1.18 1.83 1.18 3.08 0 4.42-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            GitHub
          </a>
          <a href="#calculator" className="btn btn-primary h-9 px-4 text-[13px]">Get started</a>
        </div>
      </div>
    </header>
  );
}
