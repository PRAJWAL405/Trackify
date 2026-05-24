import { useState, useCallback } from 'react';

const API_BASE = '/api';

/**
 * Custom hook for playlist calculation API calls.
 */
export function useCalculate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = useCallback(async (urls, options = {}) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const body = {
        urls: Array.isArray(urls) ? urls : [urls],
        startIndex: options.startIndex || null,
        endIndex: options.endIndex || null,
        minutesPerDay: options.minutesPerDay || null,
      };

      const response = await fetch(`${API_BASE}/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
      return data;
    } catch (err) {
      const message = err.message || 'An unexpected error occurred';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setResult(null);
  }, []);

  return { loading, error, result, calculate, reset };
}
