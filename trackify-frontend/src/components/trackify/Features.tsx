const features = [
  {
    tone: "violet" as const,
    title: "Instant duration analytics",
    body: "Total runtime, video count, averages, and per-playlist breakdowns rendered the moment you paste a URL.",
    stat: { primary: "47h 23m", primaryLabel: "Sample runtime", secondary: "156", secondaryLabel: "Videos" },
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    span: "lg:col-span-2",
  },
  {
    tone: "cyan" as const,
    title: "Speed math, solved",
    body: "Five playback presets with exact time-saved values, side by side.",
    chips: [
      { label: "1.5×", sub: "Popular" },
      { label: "−15h", sub: "Time saved", success: true },
    ],
    icon: <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    tone: "success" as const,
    title: "Daily watch plan",
    body: "Set your daily window — get the exact day you'll finish.",
    chip: { label: "Completion", value: "Feb 15, 2026" },
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10H21M8 2V6M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    tone: "pink" as const,
    title: "Stack unlimited playlists",
    body: "Drop multiple URLs and Trackify returns each report plus an aggregated summary in a single pass.",
    avatars: true,
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Capabilities</span>
          <h2 className="heading-section mt-5">
            A dashboard for <span className="text-gradient">every watchlist</span>.
          </h2>
          <p className="text-body-lg mt-5 max-w-2xl">
            Designed for people who treat their YouTube queue like a project.
            Fast input, calm output, zero clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {features.map((f) => (
            <article
              key={f.title}
              className={`glass p-8 lg:p-10 group transition-transform duration-500 hover:-translate-y-1 ${f.span ?? ""}`}
            >
              <div className={`icon-tile icon-tile-lg icon-tile-${f.tone}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{f.icon}</svg>
              </div>

              <h3 className="heading-card mt-7">{f.title}</h3>
              <p className="text-body mt-3 max-w-md">{f.body}</p>

              {f.stat && (
                <div className="mt-8 pt-8 border-t border-border-subtle flex gap-12">
                  <div>
                    <p className="stat-value stat-value-grad" style={{ fontSize: "2rem" }}>{f.stat.primary}</p>
                    <p className="text-caption mt-1.5">{f.stat.primaryLabel}</p>
                  </div>
                  <div>
                    <p className="stat-value" style={{ fontSize: "2rem" }}>{f.stat.secondary}</p>
                    <p className="text-caption mt-1.5">{f.stat.secondaryLabel}</p>
                  </div>
                </div>
              )}

              {f.chips && (
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {f.chips.map((c) => (
                    <div key={c.label} className="rounded-xl border border-border-subtle bg-[oklch(1_0_0/0.025)] p-4">
                      <p className={`text-lg font-semibold ${c.success ? "text-[oklch(0.88_0.14_160)]" : "text-text-primary"}`}>{c.label}</p>
                      <p className="text-caption">{c.sub}</p>
                    </div>
                  ))}
                </div>
              )}

              {f.chip && (
                <div className="mt-7 rounded-xl p-4 flex items-center justify-between" style={{ background: "oklch(0.78 0.17 160 / 0.08)", border: "1px solid oklch(0.78 0.17 160 / 0.22)" }}>
                  <span className="text-caption">{f.chip.label}</span>
                  <span className="font-semibold text-[oklch(0.88_0.14_160)]">{f.chip.value}</span>
                </div>
              )}

              {f.avatars && (
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((l, i) => (
                      <div
                        key={l}
                        className="w-9 h-9 rounded-lg border-2 border-background grid place-items-center text-xs font-medium text-white"
                        style={{
                          background: [
                            "linear-gradient(135deg, oklch(0.7 0.22 305), oklch(0.7 0.22 350))",
                            "linear-gradient(135deg, oklch(0.7 0.22 350), oklch(0.7 0.18 20))",
                            "linear-gradient(135deg, oklch(0.78 0.14 220), oklch(0.7 0.22 280))",
                            "linear-gradient(135deg, oklch(0.78 0.17 160), oklch(0.78 0.14 220))",
                          ][i],
                        }}
                      >{l}</div>
                    ))}
                  </div>
                  <span className="text-caption">Combine up to 10 playlists in one report</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
