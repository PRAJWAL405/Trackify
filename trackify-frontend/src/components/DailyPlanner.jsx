export default function DailyPlanner({ dailyPlan }) {
  if (!dailyPlan) return null;

  return (
    <div className="mt-10 animate-fade-in delay-3">
      <div className="flex items-center gap-4 mb-6">
        <div className="icon-wrapper icon-wrapper-success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--accent-success)" strokeWidth="1.5" />
            <path d="M3 10H21" stroke="var(--accent-success)" strokeWidth="1.5" />
            <path d="M8 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Daily Watch Plan</h3>
          <p className="text-caption">Your personalized viewing schedule</p>
        </div>
      </div>

      <div 
        className="card-stat grid grid-cols-2 gap-12 p-8"
        style={{ 
          background: 'rgba(34, 197, 94, 0.05)', 
          borderColor: 'rgba(34, 197, 94, 0.2)' 
        }}
      >
        {/* Days Needed */}
        <div>
          <p className="stat-label">Days Needed</p>
          <p className="stat-value stat-value-lg stat-value-gradient">
            {dailyPlan.daysNeeded}
          </p>
          <p className="text-caption mt-2">
            day{dailyPlan.daysNeeded !== 1 ? 's' : ''} to complete
          </p>
        </div>

        {/* Completion Date */}
        <div className="text-right">
          <p className="stat-label">Estimated Finish</p>
          <p className="text-2xl font-bold text-white mt-3">
            {dailyPlan.completionDate}
          </p>
          <p className="text-caption mt-2">
            if you start today
          </p>
        </div>
      </div>
    </div>
  );
}
