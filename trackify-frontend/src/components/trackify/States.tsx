export function LoadingState() {
  return (
    <div className="glass p-12 mt-12 flex flex-col items-center animate-fade-in">
      <div className="relative">
        <div className="spinner" style={{ width: 44, height: 44, borderWidth: 3 }} />
        <div className="absolute inset-0 -m-6 rounded-full blur-2xl" style={{ background: "oklch(0.7 0.22 305 / 0.35)" }} />
      </div>
      <p className="mt-7 font-display text-lg font-medium">Analyzing playlist</p>
      <p className="text-caption mt-1.5">Fetching video data from YouTube</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message?: string | null; onRetry?: () => void }) {
  return (
    <div
      className="glass p-7 mt-12 flex items-start gap-5 animate-fade-in-up"
      style={{ borderColor: "oklch(0.7 0.22 22 / 0.35)" }}
    >
      <div className="icon-tile icon-tile-lg" style={{ background: "oklch(0.7 0.22 22 / 0.12)", borderColor: "oklch(0.7 0.22 22 / 0.3)", color: "oklch(0.88 0.16 22)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-base font-semibold" style={{ color: "oklch(0.9 0.12 22)" }}>Something went wrong</p>
        <p className="text-body mt-1">{message || "An unexpected error occurred. Please try again."}</p>
      </div>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-secondary">
          Retry
        </button>
      )}
    </div>
  );
}
