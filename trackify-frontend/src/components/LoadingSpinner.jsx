export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="spinner mb-6"></div>
      <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
        Analyzing playlist...
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
        Fetching video data from YouTube
      </p>
    </div>
  );
}
