export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 animate-fade-in-down">
      {/* Blur backdrop */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(5, 5, 7, 0.9) 0%, rgba(5, 5, 7, 0.6) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />
      
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="white" />
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Trackify
            </h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Playlist Duration Calculator
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <a
            href="#calculator"
            className="btn-ghost"
          >
            Calculator
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View on GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
            </svg>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
