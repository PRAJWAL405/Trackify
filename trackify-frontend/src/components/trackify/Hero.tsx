type Props = { onGetStarted: () => void };

export default function Hero({ onGetStarted }: Props) {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      {/* Aurora glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[720px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 30%, oklch(0.7 0.22 305 / 0.28), transparent 70%)",
        }}
      />
      <div
        className="absolute top-32 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, oklch(0.72 0.22 350 / 0.18), transparent 70%)",
        }}
      />

      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="chip chip-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.85_0.18_320)] animate-pulse-glow" />
              New · Multi-playlist analytics engine
            </span>
          </div>

          <h1 className="heading-display mt-8 animate-fade-in-up delay-100">
            <span className="text-gradient-soft">Time, mapped.</span>
            <br />
            <span className="text-gradient">Watchlists, decoded.</span>
          </h1>

          <p className="text-body-lg max-w-2xl mx-auto mt-7 animate-fade-in-up delay-200">
            Trackify analyzes any YouTube playlist in seconds &mdash; total duration,
            speed math, and a clean daily plan for finishing what you started.
          </p>

          <div className="flex items-center justify-center gap-3 mt-10 animate-fade-in-up delay-300">
            <button onClick={onGetStarted} className="btn btn-primary btn-hero">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20" /></svg>
              Analyze a playlist
            </button>
            <a href="#features" className="btn btn-secondary btn-hero">
              Explore features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Hero stats */}
          <div className="mt-24 grid grid-cols-3 max-w-2xl mx-auto rounded-2xl glass overflow-hidden animate-fade-in-up delay-400">
            {[
              { v: "5×", l: "Speed presets" },
              { v: "∞", l: "Playlists at once" },
              { v: "0$", l: "Forever free" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`px-6 py-7 text-center ${i < 2 ? "border-r border-border-subtle" : ""}`}
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-gradient">{s.v}</p>
                <p className="text-caption mt-1.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-subtle text-[11px] tracking-[0.24em] uppercase flex flex-col items-center gap-2">
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-border-strong to-transparent" />
      </div>
    </section>
  );
}
