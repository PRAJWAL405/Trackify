import { useCalculate } from './hooks/useCalculate';
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
      {/* Background */}
      <div className="app-background" />
      <div className="noise-overlay" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          {/* Hero Section */}
          <div className="text-center pt-8 pb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 badge badge-accent mb-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free to use
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-balance">
              Calculate Your{' '}
              <span className="text-gradient">Playlist Duration</span>
            </h1>
            
            <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Paste any YouTube playlist URL to instantly see total watch time, speed breakdowns, and plan your viewing schedule.
            </p>
          </div>

          {/* Input Area */}
          <PlaylistInput onCalculate={handleCalculate} loading={loading} />

          {/* Loading State */}
          {loading && (
            <div className="mt-10">
              <LoadingSpinner />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="mt-10">
              <ErrorMessage message={error} onRetry={handleRetry} />
            </div>
          )}

          {/* Results */}
          {result && !loading && !error && (
            <div className="mt-10">
              <ResultCard result={result} />
            </div>
          )}

          {/* Feature Cards (shown when no results) */}
          {!result && !loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
              <FeatureCard
                delay="delay-1"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="var(--accent-primary)" strokeWidth="1.5" />
                    <path d="M12 7V12L15 14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                title="Instant Results"
                description="Get total duration, video count, and average length in seconds"
              />
              <FeatureCard
                delay="delay-2"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title="Speed Breakdown"
                description="See watch time at 1x, 1.25x, 1.5x, 1.75x, and 2x speeds"
              />
              <FeatureCard
                delay="delay-3"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--accent-success)" strokeWidth="1.5" />
                    <path d="M3 10H21" stroke="var(--accent-success)" strokeWidth="1.5" />
                    <path d="M8 2V6M16 2V6" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                title="Daily Planner"
                description="Set daily watch time and see when you&apos;ll finish"
              />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description, delay = '' }) {
  return (
    <div className={`card p-5 animate-fade-in-up ${delay}`}>
      <div className="icon-wrapper mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-white mb-1.5">{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
    </div>
  );
}
