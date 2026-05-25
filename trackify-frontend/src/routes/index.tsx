import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import Header from "@/components/trackify/Header";
import Hero from "@/components/trackify/Hero";
import Features from "@/components/trackify/Features";
import PlaylistInput from "@/components/trackify/PlaylistInput";
import Results from "@/components/trackify/Results";
import { LoadingState, ErrorState } from "@/components/trackify/States";
import CTA from "@/components/trackify/CTA";
import Footer from "@/components/trackify/Footer";
import { useCalculate } from "@/hooks/useCalculate";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trackify — Playlist duration & watch-time intelligence" },
      { name: "description", content: "Analyze any YouTube playlist in seconds. Total duration, speed math, and a daily watch plan in a calm, premium dashboard." },
      { property: "og:title", content: "Trackify — Playlist Intelligence" },
      { property: "og:description", content: "Premium YouTube playlist analytics: duration, speed presets, daily plan." },
    ],
  }),
});

function Index() {
  const { loading, error, result, calculate, reset } = useCalculate();
  const calcRef = useRef<HTMLDivElement>(null);

  const scrollToCalc = () => calcRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="app-shell dark">
      <div className="app-bg-grid" />
      <div className="app-bg-noise" />
      <div className="orb orb-violet" />
      <div className="orb orb-pink" />
      <div className="orb orb-cyan" />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero onGetStarted={scrollToCalc} />
          <Features />

          <section id="calculator" ref={calcRef} className="section">
            <div className="container-page">
              <div className="max-w-3xl mb-14">
                <span className="eyebrow">Calculator</span>
                <h2 className="heading-section mt-5">
                  Paste a link. <span className="text-gradient">Get the answer.</span>
                </h2>
                <p className="text-body-lg mt-5 max-w-2xl">
                  One playlist or twenty — Trackify returns a clean, structured report
                  with totals, speed presets, and a daily plan.
                </p>
              </div>

              <div className="max-w-4xl">
                <PlaylistInput
                  onCalculate={(urls, opts) => { calculate(urls, opts).catch(() => {}); }}
                  loading={loading}
                />
                {loading && <LoadingState />}
                {error && !loading && <ErrorState message={error} onRetry={reset} />}
                {result && !loading && !error && <Results result={result} />}
              </div>
            </div>
          </section>

          <CTA onGetStarted={scrollToCalc} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
