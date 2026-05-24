export default function ErrorMessage({ message, onRetry }) {
  return (
    <div 
      className="card p-5 animate-fade-in-up" 
      style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}
    >
      <div className="flex items-start gap-4">
        {/* Error Icon */}
        <div 
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(239, 68, 68, 0.1)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="var(--accent-error)" strokeWidth="1.5" />
            <path d="M15 9L9 15M9 9L15 15" stroke="var(--accent-error)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium mb-1" style={{ color: '#fca5a5' }}>
            Something went wrong
          </h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {message || 'An unexpected error occurred. Please try again.'}
          </p>
        </div>

        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-secondary flex-shrink-0"
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              borderColor: 'rgba(239, 68, 68, 0.2)',
              color: '#fca5a5',
            }}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
