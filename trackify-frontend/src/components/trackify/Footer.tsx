export default function Footer() {
  return (
    <footer className="pb-16 pt-8">
      <div className="container-page">
        <div className="section-divider mb-12" />
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="grid place-items-center w-9 h-9 rounded-xl"
              style={{ background: "var(--grad-primary)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="white" />
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Trackify</p>
              <p className="text-[11px] text-text-muted">© {new Date().getFullYear()} — Playlist intelligence for the modern viewer.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-caption mr-3">Built with</span>
            <span className="chip">React</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">YouTube API</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
