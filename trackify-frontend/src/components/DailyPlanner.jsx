export default function DailyPlanner({ dailyPlan }) {
  if (!dailyPlan) return null;

  return (
    <div className="mt-6 animate-fade-in delay-3">
      <div className="flex items-center gap-2 mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--accent-success)" strokeWidth="1.5" />
          <path d="M3 10H21" stroke="var(--accent-success)" strokeWidth="1.5" />
          <path d="M8 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <h3 className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          Daily Watch Plan
        </h3>
      </div>

      <div 
        className="stat-card grid grid-cols-1 sm:grid-cols-2 gap-6"
        style={{ 
          background: 'rgba(34, 197, 94, 0.05)', 
          borderColor: 'rgba(34, 197, 94, 0.15)' 
        }}
      >
        {/* Days Needed */}
        <div className="text-center sm:text-left">
          <p className="stat-label">Days Needed</p>
          <p className="stat-value stat-value-lg stat-value-accent">
            {dailyPlan.daysNeeded}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            day{dailyPlan.daysNeeded !== 1 ? 's' : ''} to complete
          </p>
        </div>

        {/* Completion Date */}
        <div className="text-center sm:text-right">
          <p className="stat-label">Estimated Finish</p>
          <p className="text-lg font-semibold text-white mt-1">
            {dailyPlan.completionDate}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            if you start today
          </p>
        </div>
      </div>
    </div>
  );
}
