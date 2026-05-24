export default function Header() {
  return (
    <header className="w-full py-6 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="white" />
              <rect x="2" y="4" width="20" height="16" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="highlight-number">Trackify</span>
            </h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              YouTube Playlist Calculator
            </p>
          </div>
        </div>

        {/* GitHub / Info badge */}
        <div className="glass-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Free &amp; No Signup
        </div>
      </div>
    </header>
  );
}
