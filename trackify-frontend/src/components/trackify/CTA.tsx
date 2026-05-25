type Props = { onGetStarted: () => void };

export default function CTA({ onGetStarted }: Props) {
  return (
    <section className="section-tight">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl glass glass-elevated p-12 lg:p-20 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 110%, oklch(0.7 0.22 305 / 0.35), transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="chip chip-glow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              Ready when you are
            </span>
            <h2 className="heading-section mt-7">
              Stop guessing. <span className="text-gradient">Start finishing.</span>
            </h2>
            <p className="text-body-lg mt-5">
              No sign-up. No paywall. Drop your playlist and see exactly how long it'll take.
            </p>
            <div className="mt-9">
              <button onClick={onGetStarted} className="btn btn-primary btn-hero">
                Open the calculator
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["No sign-up", "Free forever", "Instant results"].map((t) => (
                <span key={t} className="text-caption flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="oklch(0.85 0.16 160)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
