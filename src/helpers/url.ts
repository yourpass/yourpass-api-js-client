/**
 * Helper function which append new parameter in to pasted query.
 * @param query
 * @param name
 * @param value
 * @return updated query
 */
export function appendUrlParam(
  query: string,
  name: string,
  value: any,
): string {
  return `${query}${query === "" ? "" : "&"}${name}=${encodeURI(
    JSON.stringify(value),
  )}`;
}
