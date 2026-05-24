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
        <div className="card p-6 sm:p-8 animate-fade-in-up delay-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H14" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-base font-medium text-white">Overall Summary</h2>
            <span className="badge badge-accent ml-auto">{overallSummary.totalPlaylists} playlists</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="stat-card">
              <p className="stat-label">Total Duration</p>
              <p className="stat-value stat-value-accent">
                {overallSummary.formattedDuration}
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Total Videos</p>
              <p className="stat-value">
                {overallSummary.totalVideos}
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Playlists</p>
              <p className="stat-value">
                {overallSummary.totalPlaylists}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Per-Playlist Results */}
      {playlists && playlists.map((playlist, index) => (
        <div 
          key={playlist.playlistId || index}
          className="card p-6 sm:p-8 animate-fade-in-up"
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          {/* Playlist Header */}
          <div className="flex items-start gap-3 mb-6">
            <div className="icon-wrapper icon-wrapper-accent flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="var(--accent-primary)" />
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              {showOverall && (
                <span className="badge badge-accent text-xs mb-2">
                  Playlist {index + 1}
                </span>
              )}
              <h2 className="text-base font-medium text-white leading-snug truncate">
                {playlist.playlistTitle}
              </h2>
            </div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="stat-card col-span-2 sm:col-span-1">
              <p className="stat-label">Total Duration</p>
              <p className="stat-value stat-value-lg stat-value-accent">
                {playlist.formattedDuration}
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-label">Videos</p>
              <p className="stat-value">
                {playlist.videoCount}
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-label">Average Length</p>
              <p className="stat-value">
                {playlist.averageDuration}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Speed Breakdown */}
          <SpeedTable speeds={playlist.speeds} />

          {/* Daily Planner */}
          <DailyPlanner dailyPlan={playlist.dailyPlan} />
        </div>
      ))}
    </div>
  );
}
