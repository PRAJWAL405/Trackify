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
    <div className="card p-6 sm:p-8 animate-fade-in-up delay-1">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="icon-wrapper icon-wrapper-accent">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M13.5 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8.5L13.5 3Z"
                    stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 3V9H19" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-medium text-white">Paste Playlist URLs</h2>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Enter one or more YouTube URLs, one per line
            </p>
          </div>
        </div>

        {/* URL Textarea */}
        <div className="mt-5">
          <textarea
            id="playlist-url-input"
            className="input"
            rows={4}
            value={urlText}
            onChange={(e) => setUrlText(e.target.value)}
            placeholder={`https://www.youtube.com/playlist?list=PLrAXtm...\nhttps://youtu.be/dQw4w9WgXcQ\nPLxxxxxxxxxx`}
            disabled={loading}
          />
        </div>

        {/* Input Status */}
        {hasInput && (
          <div className="flex items-center gap-2 mt-3">
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: hasValidInput ? 'var(--accent-success)' : 'var(--accent-error)' }} 
            />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
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
          className="btn-ghost mt-5 -ml-3"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 animate-fade-in">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
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
              <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
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
              <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
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
          className="btn-primary w-full mt-6"
          disabled={!hasValidInput || loading}
        >
          {loading ? (
            <>
              <div className="spinner spinner-sm" style={{ borderTopColor: 'white', borderColor: 'rgba(255,255,255,0.3)' }} />
              Calculating...
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
