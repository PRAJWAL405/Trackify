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
    <div className="glass-card p-6 md:p-8 animate-fade-in-up delay-100">
      <form onSubmit={handleSubmit}>
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M13.5 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8.5L13.5 3Z"
                  stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 3V9H19" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-lg font-semibold">Paste Playlist URLs</h2>
        </div>

        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          Enter one or more YouTube playlist URLs, one per line. Supports playlist links, video links, short URLs, and raw playlist IDs.
        </p>

        {/* URL Textarea */}
        <textarea
          id="playlist-url-input"
          className="glass-input resize-none"
          rows={4}
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
          placeholder={`https://www.youtube.com/playlist?list=PLrAXtm...\nhttps://youtu.be/dQw4w9WgXcQ\nPLxxxxxxxxxx`}
          disabled={loading}
          style={{ lineHeight: '1.7' }}
        />

        {/* Input Status */}
        {hasInput && (
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 rounded-full"
                 style={{ background: hasValidInput ? '#4ade80' : '#ef4444' }} />
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
          className="flex items-center gap-2 mt-5 mb-2 text-sm font-medium cursor-pointer bg-transparent border-none"
          style={{ color: 'var(--accent-purple)' }}
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            style={{ transform: showAdvanced ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
          >
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Advanced Options
        </button>

        {/* Advanced Options Panel */}
        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 animate-fade-in">
            {/* Video Range: Start */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                Start Video #
              </label>
              <input
                id="start-index-input"
                type="number"
                min="1"
                className="glass-input"
                value={startIndex}
                onChange={(e) => setStartIndex(e.target.value)}
                placeholder="1"
                disabled={loading}
                style={{ padding: '10px 14px', fontSize: '0.85rem' }}
              />
            </div>

            {/* Video Range: End */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                End Video #
              </label>
              <input
                id="end-index-input"
                type="number"
                min="1"
                className="glass-input"
                value={endIndex}
                onChange={(e) => setEndIndex(e.target.value)}
                placeholder="Last"
                disabled={loading}
                style={{ padding: '10px 14px', fontSize: '0.85rem' }}
              />
            </div>

            {/* Minutes per Day */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                Minutes per Day
              </label>
              <input
                id="minutes-per-day-input"
                type="number"
                min="1"
                className="glass-input"
                value={minutesPerDay}
                onChange={(e) => setMinutesPerDay(e.target.value)}
                placeholder="e.g., 60"
                disabled={loading}
                style={{ padding: '10px 14px', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          id="calculate-button"
          type="submit"
          className="btn-gradient w-full mt-6"
          disabled={!hasValidInput || loading}
        >
          <span className="flex items-center justify-center gap-2">
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H9C9.55228 12 10 11.5523 10 11V4C10 3.44772 9.55228 3 9 3Z"
                        stroke="white" strokeWidth="1.5" />
                  <path d="M20 3H15C14.4477 3 14 3.44772 14 4V8C14 8.55228 14.4477 9 15 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3Z"
                        stroke="white" strokeWidth="1.5" />
                  <path d="M20 13H15C14.4477 13 14 13.4477 14 14V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V14C21 13.4477 20.5523 13 20 13Z"
                        stroke="white" strokeWidth="1.5" />
                  <path d="M9 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V17C10 16.4477 9.55228 16 9 16Z"
                        stroke="white" strokeWidth="1.5" />
                </svg>
                Calculate Duration
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
}
