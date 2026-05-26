import type { CalcResult, Playlist } from "@/hooks/useCalculate";
import { useState } from "react";

function Stat({
  label, value, gradient, mono = true,
}: { label: string; value: string | number; gradient?: boolean; mono?: boolean }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className={`stat-value ${gradient ? "stat-value-grad" : ""} ${mono ? "text-mono" : ""}`}>{value}</p>
    </div>
  );
}

function PlaylistBlock({ playlist, index, badge }: { playlist: Playlist; index: number; badge?: string }) {
  const [selectedSpeed, setSelectedSpeed] = useState("1x");

  let daysNeeded = playlist.dailyPlan?.daysNeeded;
  let completionDate = playlist.dailyPlan?.completionDate;

  if (playlist.dailyPlan && playlist.speeds && playlist.speeds[selectedSpeed]) {
    // Fallback if backend wasn't restarted yet
    let minutesPerDay = playlist.dailyPlan.minutesPerDay;
    if (!minutesPerDay && playlist.speeds["1x"]) {
      const originalMinutes = playlist.speeds["1x"].seconds / 60.0;
      minutesPerDay = originalMinutes / playlist.dailyPlan.daysNeeded;
    }

    if (minutesPerDay) {
      const speedSeconds = playlist.speeds[selectedSpeed].seconds;
      const totalMinutes = speedSeconds / 60.0;
      daysNeeded = Math.ceil(totalMinutes / minutesPerDay);
      
      const date = new Date();
      date.setDate(date.getDate() + daysNeeded);
      completionDate = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    }
  }

  return (
    <article
      className="glass glass-elevated p-8 lg:p-10 animate-fade-in-up"
      style={{ animationDelay: `${(index + 1) * 120}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="icon-tile icon-tile-lg icon-tile-violet flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="currentColor" />
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          {badge && <span className="chip chip-accent mb-3">{badge}</span>}
          <h3 className="heading-card truncate">{playlist.playlistTitle}</h3>
          <p className="text-caption mt-1.5">
            {playlist.totalVideos} videos · Avg {playlist.averageDuration ?? "—"}
          </p>
        </div>
        <span className="chip">Report</span>
      </div>

      {/* Stats grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Total duration" value={playlist.formattedDuration} gradient />
        <Stat label="Videos" value={playlist.totalVideos} />
        <Stat label="Average length" value={playlist.averageDuration ?? "—"} />
      </div>

      {/* Speed breakdown */}
      {playlist.speeds && (
        <div className="mt-10">
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="eyebrow">Playback speed</span>
              <h4 className="heading-card mt-2 text-lg">Time saved per preset</h4>
            </div>
            <span className="chip chip-success">−{Object.values(playlist.speeds).find((_, i) => i === 2)?.timeSaved ?? "0s"} @ 1.5×</span>
          </div>
          <div className="table-wrap">
            <table className="table-clean">
              <thead>
                <tr>
                  <th>Speed</th>
                  <th>Watch time</th>
                  <th className="text-right pr-6">Time saved</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(playlist.speeds).map(([label, data]) => (
                  <tr key={label}>
                    <td>
                      <div className="flex items-center gap-3">
                        <span className="text-mono text-base font-medium text-text-primary">{label}</span>
                        {label === "1.5x" && <span className="chip chip-accent">Popular</span>}
                        {label === "1x" && <span className="text-caption">Normal</span>}
                      </div>
                    </td>
                    <td className="text-mono">{data.formatted}</td>
                    <td className="text-right pr-6">
                      {label === "1x"
                        ? <span className="text-text-subtle">—</span>
                        : <span className="text-mono text-[oklch(0.88_0.14_160)]">−{data.timeSaved}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Daily plan */}
      {playlist.dailyPlan && (
        <div className="mt-8 rounded-2xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
             style={{ background: "linear-gradient(135deg, oklch(0.78 0.17 160 / 0.08), oklch(0.78 0.17 160 / 0.02))", border: "1px solid oklch(0.78 0.17 160 / 0.22)" }}>
          <div>
            <div className="flex items-center gap-3">
              <p className="stat-label">Days to finish</p>
              <select
                className="bg-[oklch(0.13_0.018_280/0.8)] text-xs text-text-primary border border-border-subtle rounded px-2 py-0.5 outline-none cursor-pointer"
                value={selectedSpeed}
                onChange={(e) => setSelectedSpeed(e.target.value)}
                title="Select playback speed"
              >
                {playlist.speeds && Object.keys(playlist.speeds).map(speed => (
                  <option key={speed} value={speed}>@ {speed}</option>
                ))}
              </select>
            </div>
            <p className="stat-value stat-value-xl text-mono mt-3">{daysNeeded}</p>
            <p className="text-caption mt-2">at your daily window</p>
          </div>
          <div className="md:text-right">
            <p className="stat-label">Estimated finish</p>
            <p className="font-display text-3xl font-semibold tracking-tight mt-3">{completionDate}</p>
            <p className="text-caption mt-2">starting today</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Results({ result }: { result: CalcResult }) {
  if (!result) return null;
  const { playlists, overallSummary } = result;
  const showOverall = playlists && playlists.length > 1 && overallSummary;

  return (
    <div className="space-y-8 mt-12">
      {showOverall && (
        <article className="glass glass-elevated p-8 lg:p-10 animate-fade-in-up">
          <div className="flex items-center gap-4">
            <div className="icon-tile icon-tile-lg icon-tile-cyan">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div className="flex-1">
              <span className="eyebrow">Aggregate</span>
              <h3 className="heading-card mt-2">Overall summary</h3>
            </div>
            <span className="chip chip-accent">{overallSummary!.totalPlaylists} playlists</span>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Stat label="Total duration" value={overallSummary!.formattedDuration} gradient />
            <Stat label="Total videos" value={overallSummary!.totalVideos} />
            <Stat label="Playlists" value={overallSummary!.totalPlaylists} />
          </div>
        </article>
      )}

      {playlists?.map((p, i) => (
        <PlaylistBlock
          key={p.playlistId ?? i}
          playlist={p}
          index={i}
          badge={showOverall ? `Playlist ${i + 1}` : undefined}
        />
      ))}
    </div>
  );
}
