export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="glass-card p-6 animate-fade-in-up" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
      <div className="flex items-start gap-4">
        {/* Error Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
             style={{ background: 'rgba(239, 68, 68, 0.15)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M15 9L9 15M9 9L15 15" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-1" style={{ color: '#fca5a5' }}>
            Something went wrong
          </h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {message || 'An unexpected error occurred. Please try again.'}
          </p>
        </div>

        {onRetry && (
          <button
            onClick={onRetry}
            className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(239, 68, 68, 0.25)'}
            onMouseLeave={e => e.target.style.background = 'rgba(239, 68, 68, 0.15)'}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
