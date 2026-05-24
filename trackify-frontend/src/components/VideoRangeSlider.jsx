export default function VideoRangeSlider({ videoCount, startIndex, endIndex, onStartChange, onEndChange }) {
  if (!videoCount || videoCount <= 1) return null;

  const start = startIndex || 1;
  const end = endIndex || videoCount;

  return (
    <div className="mt-4 animate-fade-in delay-200">
      <div className="flex items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M4 12H20" stroke="var(--accent-blue)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="12" r="3" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <circle cx="16" cy="12" r="3" stroke="var(--accent-blue)" strokeWidth="1.5" />
        </svg>
        <h3 className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
          Video Range
        </h3>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          ({videoCount} videos total)
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>From Video</label>
          <input
            type="number"
            min={1}
            max={end}
            value={start}
            onChange={(e) => onStartChange(parseInt(e.target.value, 10))}
            className="glass-input"
            style={{ padding: '8px 12px', fontSize: '0.85rem' }}
          />
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>To Video</label>
          <input
            type="number"
            min={start}
            max={videoCount}
            value={end}
            onChange={(e) => onEndChange(parseInt(e.target.value, 10))}
            className="glass-input"
            style={{ padding: '8px 12px', fontSize: '0.85rem' }}
          />
        </div>
      </div>
      <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
        Showing videos {start} to {end} of {videoCount}
      </p>
    </div>
  );
}
