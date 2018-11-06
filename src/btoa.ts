import { Buffer } from "safe-buffer";

const btoa = typeof Buffer === "function" ? btoaBuffer : window.btoa;

/**
 * Support base64 in node like how it works in the browser.
 *
 * @param  {string} string
 * @return {string}
 */
function btoaBuffer(str: string) {
  return new Buffer(str).toString("base64");
}

export default btoa;
