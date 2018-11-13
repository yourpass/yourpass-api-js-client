export interface Fetch {
  fetch<T>(input: RequestInfo, init: RequestInit): Promise<T>;
}
