export default function ErrorMessage({ message, onRetry }) {
  return (
    <div 
      className="card-glass p-8 animate-fade-in-up" 
      style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}
    >
      <div className="flex items-start gap-6">
        {/* Error Icon */}
        <div 
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="var(--accent-error)" strokeWidth="1.5" />
            <path d="M15 9L9 15M9 9L15 15" stroke="var(--accent-error)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#fca5a5' }}>
            Something went wrong
          </h3>
          <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.51 15C4.15 16.92 5.44 18.53 7.15 19.57C8.85 20.61 10.87 21.02 12.85 20.73C14.83 20.45 16.65 19.49 18 18.01C19.34 16.53 20.12 14.62 20.21 12.62C20.3 10.62 19.69 8.64 18.48 7.04C17.27 5.43 15.54 4.3 13.6 3.83C11.66 3.36 9.62 3.57 7.82 4.43C6.03 5.29 4.58 6.74 3.72 8.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
