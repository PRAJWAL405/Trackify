export default function SpeedTable({ speeds }) {
  if (!speeds) return null;

  const speedEntries = Object.entries(speeds);

  return (
    <div className="animate-fade-in delay-2">
      <div className="flex items-center gap-4 mb-6">
        <div className="icon-wrapper icon-wrapper-cyan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Playback Speed Breakdown</h3>
          <p className="text-caption">See how much time you save at different speeds</p>
        </div>
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
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-white">{label}</span>
                    {label === '1.5x' && (
                      <span className="badge badge-success">
                        Popular
                      </span>
                    )}
                    {label === '1x' && (
                      <span className="text-caption">Normal</span>
                    )}
                  </div>
                </td>
                <td>
                  <span className={label === '1x' ? 'text-white font-medium text-lg' : 'text-lg'}>
                    {data.formatted}
                  </span>
                </td>
                <td>
                  {label === '1x' ? (
                    <span style={{ color: 'var(--text-subtle)' }}>—</span>
                  ) : (
                    <span className="text-lg font-medium" style={{ color: 'var(--accent-success)' }}>
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
