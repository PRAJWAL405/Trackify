import SpeedTable from './SpeedTable';
import DailyPlanner from './DailyPlanner';

export default function ResultCard({ result }) {
  if (!result) return null;

  const { playlists, overallSummary } = result;
  const showOverall = playlists && playlists.length > 1;

  return (
    <div className="space-y-6">
      {/* Overall Summary (if multiple playlists) */}
      {showOverall && (
        <div className="glass-card p-6 md:p-8 animate-fade-in-up delay-200">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H14" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h2 className="text-lg font-semibold">Overall Summary</h2>
            <span className="glass-badge ml-2">{overallSummary.totalPlaylists} playlists</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Total Duration</p>
              <p className="text-2xl font-bold highlight-number mt-1">
                {overallSummary.formattedDuration}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Total Videos</p>
              <p className="text-2xl font-bold text-white mt-1">
                {overallSummary.totalVideos}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Playlists</p>
              <p className="text-2xl font-bold text-white mt-1">
                {overallSummary.totalPlaylists}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Per-Playlist Results */}
      {playlists && playlists.map((playlist, index) => (
        <div key={playlist.playlistId || index}
             className="glass-card p-6 md:p-8 animate-fade-in-up"
             style={{ animationDelay: `${(index + 1) * 150}ms` }}>

          {/* Playlist Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="var(--accent-purple)" />
                  <rect x="2" y="4" width="20" height="16" rx="4" stroke="var(--accent-purple)" strokeWidth="1.5" fill="none" />
                </svg>
                {showOverall && (
                  <span className="glass-badge" style={{ fontSize: '0.65rem' }}>
                    Playlist {index + 1}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-white leading-snug">
                {playlist.playlistTitle}
              </h2>
            </div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
            {/* Total Duration */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Total Duration</p>
              <p className="text-3xl sm:text-4xl font-bold highlight-number mt-1">
                {playlist.formattedDuration}
              </p>
            </div>

            {/* Video Count */}
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Videos</p>
              <p className="text-2xl font-bold text-white mt-1">
                {playlist.videoCount}
              </p>
            </div>

            {/* Average Duration */}
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Average Length</p>
              <p className="text-2xl font-bold text-white mt-1">
                {playlist.averageDuration}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5" style={{ borderTop: '1px solid var(--glass-border)' }} />

          {/* Speed Breakdown */}
          <SpeedTable speeds={playlist.speeds} />

          {/* Daily Planner */}
          <DailyPlanner dailyPlan={playlist.dailyPlan} />
        </div>
      ))}
    </div>
  );
}
