export default function HeroSection({ onGetStarted }) {
  return (
    <section className="section section-full relative overflow-hidden">
      {/* Hero glow effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 20%, rgba(168, 85, 247, 0.2), transparent)',
        }}
      />
      
      <div className="section-content relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <span className="badge badge-glow mb-8 inline-flex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free Forever
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display mb-8 animate-fade-in-up">
            <span className="text-gradient-subtle">Know Your</span>
            <br />
            <span className="text-gradient">Watch Time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg max-w-2xl mx-auto mb-12 animate-fade-in-up delay-1" style={{ color: 'var(--text-secondary)' }}>
            The most powerful YouTube playlist analyzer. Get instant duration insights, 
            speed calculations, and create your perfect viewing schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-2">
            <button onClick={onGetStarted} className="btn-hero">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
              Get Started
            </button>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-16 mt-24 animate-fade-in-up delay-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-caption">Free to Use</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-default)]" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">Instant</p>
              <p className="text-caption">Results</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-default)]" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">5+</p>
              <p className="text-caption">Speed Options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in delay-4">
        <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-float">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
