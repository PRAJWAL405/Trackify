export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
      <div className="relative">
        <div className="spinner mb-8" style={{ width: '56px', height: '56px', borderWidth: '3px' }}></div>
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            transform: 'scale(2)',
          }}
        />
      </div>
      <p className="text-lg font-semibold text-white mb-2">
        Analyzing playlist...
      </p>
      <p className="text-body" style={{ color: 'var(--text-muted)' }}>
        Fetching video data from YouTube
      </p>
    </div>
  );
}
