import { useCalculate } from './hooks/useCalculate';
import GlassBlob from './components/GlassBlob';
import Header from './components/Header';
import PlaylistInput from './components/PlaylistInput';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const { loading, error, result, calculate, reset } = useCalculate();

  const handleCalculate = (urls, options) => {
    calculate(urls, options).catch(() => {
      // Error is already stored in the hook's state
    });
  };

  const handleRetry = () => {
    reset();
  };

  return (
    <>
      {/* Animated gradient background */}
      <div className="animated-bg" />

      {/* Floating decorative blobs */}
      <GlassBlob />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full max-w-4xl mx-auto px-4 pb-8">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
              Calculate Your YouTube
              <br />
              <span className="highlight-number">Playlist Duration</span>
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Paste any YouTube playlist URL to instantly see the total watch time,
              speed breakdowns, and plan your viewing schedule.
            </p>
          </div>

          {/* Input Area */}
          <PlaylistInput onCalculate={handleCalculate} loading={loading} />

          {/* Loading State */}
          {loading && (
            <div className="mt-8">
              <LoadingSpinner />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="mt-8">
              <ErrorMessage message={error} onRetry={handleRetry} />
            </div>
          )}

          {/* Results */}
          {result && !loading && !error && (
            <div className="mt-8">
              <ResultCard result={result} />
            </div>
          )}

          {/* Feature Cards (shown when no results) */}
          {!result && !loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 animate-fade-in-up delay-300">
              <FeatureCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="var(--accent-purple)" strokeWidth="1.5" />
                    <path d="M12 6V12L16 14" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                title="Instant Results"
                description="Get total duration, video count, and average length in seconds"
              />
              <FeatureCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                          stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title="Speed Breakdown"
                description="See watch time at 1×, 1.25×, 1.5×, 1.75×, and 2× playback speeds"
              />
              <FeatureCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="var(--accent-pink)" strokeWidth="1.5" />
                    <path d="M3 10H21" stroke="var(--accent-pink)" strokeWidth="1.5" />
                    <path d="M8 2V6M16 2V6" stroke="var(--accent-pink)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                title="Daily Planner"
                description="Set daily watch time and see when you'll finish the playlist"
              />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-card p-5 text-center">
      <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
           style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{description}</p>
    </div>
  );
}
