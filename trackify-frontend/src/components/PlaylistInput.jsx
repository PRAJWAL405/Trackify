import { useState } from 'react';
import { parseMultipleUrls, isValidYouTubeInput } from '../utils/parseUrl';

export default function PlaylistInput({ onCalculate, loading }) {
  const [urlText, setUrlText] = useState('');
  const [startIndex, setStartIndex] = useState('');
  const [endIndex, setEndIndex] = useState('');
  const [minutesPerDay, setMinutesPerDay] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const urls = parseMultipleUrls(urlText);
  const validUrls = urls.filter(isValidYouTubeInput);
  const hasInput = urlText.trim().length > 0;
  const hasValidInput = validUrls.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasValidInput || loading) return;

    onCalculate(validUrls, {
      startIndex: startIndex ? parseInt(startIndex, 10) : null,
      endIndex: endIndex ? parseInt(endIndex, 10) : null,
      minutesPerDay: minutesPerDay ? parseInt(minutesPerDay, 10) : null,
    });
  };

  return (
    <div className="card-glass p-12 animate-fade-in-up glow-accent">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="icon-wrapper-lg icon-wrapper-accent">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M13.5 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8.5L13.5 3Z"
                    stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 3V9H19" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Paste Playlist URLs</h2>
            <p className="text-body" style={{ color: 'var(--text-muted)' }}>
              Enter one or more YouTube playlist URLs, one per line
            </p>
          </div>
        </div>

        {/* URL Textarea */}
        <div className="mb-6">
          <textarea
            id="playlist-url-input"
            className="input-large"
            rows={5}
            value={urlText}
            onChange={(e) => setUrlText(e.target.value)}
            placeholder={`https://www.youtube.com/playlist?list=PLrAXtm...\nhttps://youtu.be/dQw4w9WgXcQ\nPLxxxxxxxxxx`}
            disabled={loading}
          />
        </div>

        {/* Input Status */}
        {hasInput && (
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: hasValidInput ? 'var(--accent-success)' : 'var(--accent-error)' }} 
            />
            <span className="text-body" style={{ color: 'var(--text-muted)' }}>
              {hasValidInput
                ? `${validUrls.length} valid URL${validUrls.length > 1 ? 's' : ''} detected`
                : 'No valid YouTube URLs detected'
              }
            </span>
          </div>
        )}

        {/* Advanced Options Toggle */}
        <button
          type="button"
          className="btn-ghost mb-6 -ml-4"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            style={{ 
              transform: showAdvanced ? 'rotate(90deg)' : 'rotate(0deg)', 
              transition: 'transform 0.2s ease' 
            }}
          >
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Advanced Options
        </button>

        {/* Advanced Options Panel */}
        {showAdvanced && (
          <div className="grid grid-cols-3 gap-6 mb-8 animate-fade-in p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                Start Video #
              </label>
              <input
                id="start-index-input"
                type="number"
                min="1"
                className="input"
                value={startIndex}
                onChange={(e) => setStartIndex(e.target.value)}
                placeholder="1"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                End Video #
              </label>
              <input
                id="end-index-input"
                type="number"
                min="1"
                className="input"
                value={endIndex}
                onChange={(e) => setEndIndex(e.target.value)}
                placeholder="Last"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                Minutes per Day
              </label>
              <input
                id="minutes-per-day-input"
                type="number"
                min="1"
                className="input"
                value={minutesPerDay}
                onChange={(e) => setMinutesPerDay(e.target.value)}
                placeholder="e.g., 60"
                disabled={loading}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          id="calculate-button"
          type="submit"
          className="btn-hero w-full"
          disabled={!hasValidInput || loading}
        >
          {loading ? (
            <>
              <div className="spinner spinner-sm" style={{ borderTopColor: 'white', borderColor: 'rgba(255,255,255,0.3)' }} />
              Analyzing Playlist...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Calculate Duration
            </>
          )}
        </button>
      </form>
    </div>
  );
}
