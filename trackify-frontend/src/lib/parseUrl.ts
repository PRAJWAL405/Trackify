const PLAYLIST_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|music\.youtube\.com)\/playlist\?list=([a-zA-Z0-9_-]+)/;
const VIDEO_WITH_LIST_REGEX = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*list=([a-zA-Z0-9_-]+)/;
const VIDEO_REGEX = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
const SHORT_URL_REGEX = /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/;
const RAW_PLAYLIST_ID_REGEX = /^(PL[a-zA-Z0-9_-]+|UU[a-zA-Z0-9_-]+|OL[a-zA-Z0-9_-]+|FL[a-zA-Z0-9_-]+|RD[a-zA-Z0-9_-]*)$/;

export function isValidYouTubeInput(input: string): boolean {
  if (!input || !input.trim()) return false;
  const v = input.trim();
  return (
    PLAYLIST_REGEX.test(v) ||
    VIDEO_WITH_LIST_REGEX.test(v) ||
    VIDEO_REGEX.test(v) ||
    SHORT_URL_REGEX.test(v) ||
    RAW_PLAYLIST_ID_REGEX.test(v)
  );
}

export function parseMultipleUrls(rawInput: string): string[] {
  if (!rawInput) return [];
  return rawInput
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}
