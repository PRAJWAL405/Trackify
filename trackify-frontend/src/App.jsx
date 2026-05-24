import { useRef } from 'react';
import { useCalculate } from './hooks/useCalculate';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlaylistInput from './components/PlaylistInput';
import FeatureShowcase from './components/FeatureShowcase';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ResultCard from './components/ResultCard';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const { loading, error, result, calculate, reset } = useCalculate();
  const calculatorRef = useRef(null);

  const handleCalculate = (urls, options) => {
    calculate(urls, options).catch(() => {
      // Error is already stored in the hook's state
    });
  };

  const handleRetry = () => {
    reset();
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Cinematic Background */}
      <div className="app-background" />
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      <div className="noise-overlay" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <HeroSection onGetStarted={scrollToCalculator} />

        {/* Feature Showcase */}
        <FeatureShowcase />

        {/* Calculator Section */}
        <section ref={calculatorRef} className="section" id="calculator">
          <div className="section-content">
            {/* Section Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <span className="text-overline mb-4 block">Get Started</span>
              <h2 className="heading-section mb-6">
                Calculate Your <span className="text-gradient">Playlist</span>
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Paste any YouTube playlist URL below and get instant analytics, 
                speed calculations, and a personalized watch plan.
              </p>
            </div>

            {/* Calculator Card */}
            <div className="max-w-4xl mx-auto">
              <PlaylistInput onCalculate={handleCalculate} loading={loading} />

              {/* Loading State */}
              {loading && (
                <div className="mt-16">
                  <LoadingSpinner />
                </div>
              )}

              {/* Error State */}
              {error && !loading && (
                <div className="mt-16">
                  <ErrorMessage message={error} onRetry={handleRetry} />
                </div>
              )}

              {/* Results */}
              {result && !loading && !error && (
                <div className="mt-16">
                  <ResultCard result={result} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection onGetStarted={scrollToCalculator} />

        <Footer />
      </div>
    </>
  );
}
