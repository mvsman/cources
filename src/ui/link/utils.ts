/**
 * Check if the URL is absolute.
 *
 * @param url The URL to check.
 * @returns `true` if the passed URL is absolute; `false` otherwise.
 */
export const isExternalUrl = (url: string) => /^https?:\/\//.test(url)
