export default function DailyPlanner({ dailyPlan }) {
  if (!dailyPlan) return null;

  return (
    <div className="mt-6 animate-fade-in delay-400">
      <div className="flex items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="3" stroke="var(--accent-pink)" strokeWidth="1.5" />
          <path d="M3 10H21" stroke="var(--accent-pink)" strokeWidth="1.5" />
          <path d="M8 2V6" stroke="var(--accent-pink)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 2V6" stroke="var(--accent-pink)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <h3 className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
          Daily Watch Plan
        </h3>
      </div>

      <div className="glass-card p-5"
           style={{ background: 'rgba(236, 72, 153, 0.06)', borderColor: 'rgba(236, 72, 153, 0.15)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Days Needed */}
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
              Days Needed
            </p>
            <p className="text-3xl font-bold highlight-number">
              {dailyPlan.daysNeeded}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              day{dailyPlan.daysNeeded !== 1 ? 's' : ''} to complete
            </p>
          </div>

          {/* Completion Date */}
          <div className="text-center sm:text-right">
            <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
              Estimated Finish
            </p>
            <p className="text-lg font-semibold text-white">
              {dailyPlan.completionDate}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              if you start today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
