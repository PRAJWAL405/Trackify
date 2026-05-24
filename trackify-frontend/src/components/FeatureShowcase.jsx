export default function FeatureShowcase() {
  return (
    <section className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="text-overline mb-4 block">Features</span>
          <h2 className="heading-section mb-6">
            Everything You Need to <span className="text-gradient">Plan Your Watch</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Powerful tools designed to help you understand and optimize your YouTube viewing experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Large Feature Card - Duration Analytics */}
          <div className="bento-item-large">
            <div className="card-feature h-full flex flex-col">
              <div className="icon-wrapper-lg icon-wrapper-accent mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="var(--accent-primary)" strokeWidth="1.5" />
                  <path d="M12 7V12L15 14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">Instant Duration Analytics</h3>
              <p className="text-body flex-1">
                Get comprehensive analytics for any YouTube playlist in seconds. 
                Total duration, video count, average length, and detailed breakdowns.
              </p>
              <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-12">
                  <div>
                    <p className="stat-value text-3xl stat-value-gradient">47h 23m</p>
                    <p className="text-caption mt-1">Sample Duration</p>
                  </div>
                  <div>
                    <p className="stat-value text-3xl">156</p>
                    <p className="text-caption mt-1">Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature Card - Speed Calculation */}
          <div className="bento-item-small">
            <div className="card-feature h-full flex flex-col">
              <div className="icon-wrapper-lg icon-wrapper-cyan mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">Speed Breakdown</h3>
              <p className="text-body flex-1">
                See exactly how much time you save at different playback speeds: 
                1x, 1.25x, 1.5x, 1.75x, and 2x.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
                  <p className="text-lg font-semibold text-white">1.5x</p>
                  <p className="text-caption">Most Popular</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
                  <p className="text-lg font-semibold text-[var(--accent-success)]">-15h</p>
                  <p className="text-caption">Time Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature Card - Watch Planning */}
          <div className="bento-item-small">
            <div className="card-feature h-full flex flex-col">
              <div className="icon-wrapper-lg icon-wrapper-success mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--accent-success)" strokeWidth="1.5" />
                  <path d="M3 10H21" stroke="var(--accent-success)" strokeWidth="1.5" />
                  <path d="M8 2V6M16 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">Daily Planner</h3>
              <p className="text-body flex-1">
                Set your daily watch time and get a personalized schedule 
                showing exactly when you&apos;ll finish.
              </p>
              <div className="mt-8 p-4 rounded-xl bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="text-caption">Completion Date</span>
                  <span className="font-semibold text-[var(--accent-success)]">Feb 15, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Feature Card - Multiple Playlists */}
          <div className="bento-item-large">
            <div className="card-feature h-full flex flex-col">
              <div className="icon-wrapper-lg icon-wrapper-pink mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="var(--accent-pink)" strokeWidth="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="var(--accent-pink)" strokeWidth="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="var(--accent-pink)" strokeWidth="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="var(--accent-pink)" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">Multiple Playlist Support</h3>
              <p className="text-body flex-1">
                Analyze multiple playlists at once. Get individual breakdowns 
                plus a combined summary for all your content.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium border-2 border-[var(--bg-primary)]"
                      style={{ 
                        background: `linear-gradient(135deg, ${['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-pink)', 'var(--accent-success)'][i-1]} 0%, transparent 100%)`,
                        backgroundColor: 'var(--surface-3)'
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-caption">Combine up to 10 playlists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
