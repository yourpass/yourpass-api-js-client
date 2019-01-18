// @ts-ignore::disable:no-implicit-dependencies
import dotenv from "dotenv";
import { OAuthOptions } from "../../src/fetch";

dotenv.config();

if (!process.env.TEST_API_URL) {
  throw "TEST_API_URL is not set";
}
if (!process.env.TEST_CLIENT_ID) {
  throw "TEST_CLIENT_ID is not set";
}
if (process.env.TEST_CLIENT_SECRET === undefined) {
  throw "TEST_CLIENT_SECRET is not set";
}
if (!process.env.TEST_USERNAME) {
  throw "TEST_USERNAME is not set";
}
if (!process.env.TEST_PASSWORD) {
  throw "TEST_PASSWORD is not set";
}

export const enviroment: { urlBase: string} = {
  urlBase: process.env.TEST_API_URL,
};

const credentials: OAuthOptions = {
  clientId: process.env.TEST_CLIENT_ID,
  clientSecret: process.env.TEST_CLIENT_SECRET,
  username: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
  url: process.env.TEST_API_URL,
};

export default credentials;
