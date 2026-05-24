/**
 * Validate and parse YouTube URLs.
 */

const PLAYLIST_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|music\.youtube\.com)\/playlist\?list=([a-zA-Z0-9_-]+)/;
const VIDEO_WITH_LIST_REGEX = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*list=([a-zA-Z0-9_-]+)/;
const VIDEO_REGEX = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
const SHORT_URL_REGEX = /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/;
const RAW_PLAYLIST_ID_REGEX = /^(PL[a-zA-Z0-9_-]+|UU[a-zA-Z0-9_-]+|OL[a-zA-Z0-9_-]+|FL[a-zA-Z0-9_-]+|RD[a-zA-Z0-9_-]*)$/;

/**
 * Check if a string is a valid YouTube URL or playlist ID.
 * @param {string} input
 * @returns {boolean}
 */
export function isValidYouTubeInput(input) {
  if (!input || !input.trim()) return false;
  input = input.trim();

  return (
    PLAYLIST_REGEX.test(input) ||
    VIDEO_WITH_LIST_REGEX.test(input) ||
    VIDEO_REGEX.test(input) ||
    SHORT_URL_REGEX.test(input) ||
    RAW_PLAYLIST_ID_REGEX.test(input)
  );
}

/**
 * Get the type of YouTube input.
 * @param {string} input
 * @returns {'playlist' | 'video' | 'unknown'}
 */
export function getInputType(input) {
  if (!input || !input.trim()) return 'unknown';
  input = input.trim();

  if (PLAYLIST_REGEX.test(input) || VIDEO_WITH_LIST_REGEX.test(input) || RAW_PLAYLIST_ID_REGEX.test(input)) {
    return 'playlist';
  }
  if (VIDEO_REGEX.test(input) || SHORT_URL_REGEX.test(input)) {
    return 'video';
  }
  return 'unknown';
}

/**
 * Parse multi-line input into individual URLs.
 * @param {string} rawInput
 * @returns {string[]}
 */
export function parseMultipleUrls(rawInput) {
  if (!rawInput) return [];
  return rawInput
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}
