// @ts-ignore::disable:no-implicit-dependencies
import dotenv from "dotenv";
import { CredentialsClientOptions } from "../src/fetch";

dotenv.config();
const credentials: CredentialsClientOptions = {
  clientId: process.env.TEST_CLIENT_ID || "",
  clientSecret: process.env.TEST_CLIENT_SECRET || "",
  username: process.env.TEST_USERNAME || "",
  password: process.env.TEST_PASSWORD || "",
};

export default credentials;
