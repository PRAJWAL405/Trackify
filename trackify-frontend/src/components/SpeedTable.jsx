export default function SpeedTable({ speeds }) {
  if (!speeds) return null;

  const speedEntries = Object.entries(speeds);

  return (
    <div className="animate-fade-in delay-2">
      <div className="flex items-center gap-2 mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          Playback Speed Breakdown
        </h3>
      </div>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Speed</th>
              <th>Watch Time</th>
              <th>Time Saved</th>
            </tr>
          </thead>
          <tbody>
            {speedEntries.map(([label, data]) => (
              <tr key={label}>
                <td>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{label}</span>
                    {label === '1.5x' && (
                      <span className="badge badge-success" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                        Popular
                      </span>
                    )}
                    {label === '1x' && (
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Normal</span>
                    )}
                  </div>
                </td>
                <td>
                  <span className={label === '1x' ? 'text-white font-medium' : ''}>
                    {data.formatted}
                  </span>
                </td>
                <td>
                  {label === '1x' ? (
                    <span style={{ color: 'var(--text-subtle)' }}>—</span>
                  ) : (
                    <span style={{ color: 'var(--accent-success)' }}>
                      -{data.timeSaved}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
