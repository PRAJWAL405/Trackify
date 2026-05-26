import { useState, useCallback } from "react";

export type SpeedEntry = { seconds: number; formatted: string; timeSaved: string };
export type Playlist = {
  playlistId?: string;
  playlistTitle: string;
  formattedDuration: string;
  totalVideos: number;
  averageDuration?: string;
  speeds?: Record<string, SpeedEntry>;
  dailyPlan?: { daysNeeded: number; completionDate: string; minutesPerDay: number } | null;
};
export type CalcResult = {
  playlists: Playlist[];
  overallSummary?: {
    formattedDuration: string;
    totalVideos: number;
    totalPlaylists: number;
  };
};

export type CalcOptions = {
  startIndex?: number | null;
  endIndex?: number | null;
  minutesPerDay?: number | null;
};

const API_BASE = "/api";

export function useCalculate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CalcResult | null>(null);

  const calculate = useCallback(async (urls: string[], options: CalcOptions = {}) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const body = {
        urls: Array.isArray(urls) ? urls : [urls],
        startIndex: options.startIndex ?? null,
        endIndex: options.endIndex ?? null,
        minutesPerDay: options.minutesPerDay ?? null,
      };
      const res = await fetch(`${API_BASE}/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Request failed with status ${res.status}`);
      }
      const data = (await res.json()) as CalcResult;
      setResult(data);
      return data;
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "An unexpected error occurred";
      setError(message);
      throw e;
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
