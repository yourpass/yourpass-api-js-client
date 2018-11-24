/**
 * TODO - find better implementation (universal) function to convert string into base64 for all platforms
 * (React Native, NodeJs, Browser)
 */

export default (str: string) => {
  global.Buffer = global.Buffer || require("buffer").Buffer;
  return new Buffer(str, "binary").toString("base64");
};
