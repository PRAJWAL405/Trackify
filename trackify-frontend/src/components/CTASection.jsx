export default function CTASection({ onGetStarted }) {
  return (
    <section className="section relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(168, 85, 247, 0.12), transparent)',
        }}
      />
      
      <div className="section-content relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="badge badge-glow mb-8 inline-flex animate-fade-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ready to Start?
          </span>

          {/* Headline */}
          <h2 className="heading-section mb-8 animate-fade-in-up">
            Start Planning Your <span className="text-gradient">Watch Time</span> Today
          </h2>

          {/* Description */}
          <p className="text-body-lg max-w-2xl mx-auto mb-12 animate-fade-in-up delay-1">
            Join thousands of users who have optimized their YouTube viewing experience. 
            Free forever, no sign-up required.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-2">
            <button onClick={onGetStarted} className="btn-hero">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Calculate Now
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up delay-3">
            <div className="flex items-center gap-2 text-caption">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No sign-up required
            </div>
            <div className="flex items-center gap-2 text-caption">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free forever
            </div>
            <div className="flex items-center gap-2 text-caption">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Instant results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
