import { useState } from "react";
import { isValidYouTubeInput, parseMultipleUrls } from "@/lib/parseUrl";
import type { CalcOptions } from "@/hooks/useCalculate";

type Props = {
  onCalculate: (urls: string[], options: CalcOptions) => void;
  loading: boolean;
};

export default function PlaylistInput({ onCalculate, loading }: Props) {
  const [urlText, setUrlText] = useState("");
  const [startIndex, setStartIndex] = useState("");
  const [endIndex, setEndIndex] = useState("");
  const [minutesPerDay, setMinutesPerDay] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const urls = parseMultipleUrls(urlText);
  const validUrls = urls.filter(isValidYouTubeInput);
  const hasInput = urlText.trim().length > 0;
  const hasValid = validUrls.length > 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasValid || loading) return;
    onCalculate(validUrls, {
      startIndex: startIndex ? parseInt(startIndex, 10) : null,
      endIndex: endIndex ? parseInt(endIndex, 10) : null,
      minutesPerDay: minutesPerDay ? parseInt(minutesPerDay, 10) : null,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="glass glass-elevated glow-violet p-8 lg:p-10 animate-fade-in-up"
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="icon-tile icon-tile-lg icon-tile-violet">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="currentColor" />
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h3 className="heading-card">Paste a playlist</h3>
            <p className="text-caption mt-1">One URL per line · playlists, videos or raw IDs</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${hasValid ? "bg-[oklch(0.78_0.17_160)]" : hasInput ? "bg-[oklch(0.7_0.22_22)]" : "bg-text-subtle"}`} />
          <span className="text-caption text-mono">
            {hasInput ? (hasValid ? `${validUrls.length} valid` : "0 valid") : "Awaiting input"}
          </span>
        </div>
      </div>

      {/* Textarea */}
      <div className="mt-7">
        <textarea
          className="textarea"
          rows={4}
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
          disabled={loading}
          placeholder={`https://www.youtube.com/playlist?list=PLrAXtmRdnEQy...\nhttps://youtu.be/dQw4w9WgXcQ\nPLxxxxxxxxxxxx`}
          spellCheck={false}
        />
      </div>

      {/* Advanced toggle row */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          className="btn btn-ghost h-9 px-3 -ml-3 text-[13px]"
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            style={{ transform: showAdvanced ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .2s" }}
          >
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Advanced options
        </button>

        <button
          type="submit"
          disabled={!hasValid || loading}
          className="btn btn-primary btn-hero min-w-56"
        >
          {loading ? (
            <>
              <span className="spinner" />
              Analyzing playlist…
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Calculate duration
            </>
          )}
        </button>
      </div>

      {showAdvanced && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl border border-border-subtle bg-[oklch(0.13_0.018_280/0.5)] animate-fade-in">
          {[
            { id: "start", label: "Start video", value: startIndex, set: setStartIndex, placeholder: "1" },
            { id: "end", label: "End video", value: endIndex, set: setEndIndex, placeholder: "Last" },
            { id: "mpd", label: "Minutes / day", value: minutesPerDay, set: setMinutesPerDay, placeholder: "60" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-[11px] tracking-[0.16em] uppercase text-text-muted font-medium">
                {f.label}
              </label>
              <input
                id={f.id}
                type="number"
                min={1}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.placeholder}
                className="input mt-2"
                disabled={loading}
              />
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
