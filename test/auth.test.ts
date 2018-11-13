import config from "./config";
import btoa from "../src/btoa";
import { CredentialsToken } from "../src/fetch/credentials/CredentialsToken";
import CoreApiClient, {
  CredentialsFetch,
  CredentialsClientClass,
  TokenFetch,
  Fetch,
  List,
  PassBase,
} from "../index";

const credentialsFetchInstance = CredentialsFetch({
  ...config,
});

let credentialsToken: CredentialsToken | undefined;

describe("client credentials auth test", () => {
  it("get base64", () => {
    btoa(config.clientId + ":" + config.clientSecret);
  });

  it("get token should return token", (done) => {
    new CredentialsClientClass({ ...config })
      .fetchToken(config.username, config.password)
      .then((tr: CredentialsToken) => {
        credentialsToken = tr;
        done();
      }, done);
  });

  it("get pass list with fetch", (done) => {
    const client: CoreApiClient = new CoreApiClient({
      fetch: credentialsFetchInstance,
    });
    client.passList().then((l: List<PassBase>) => {
      done();
    });
  });

  // TODO test expiration
  // TODO test refreshing token)
  // TODO test fetch with header token
});

describe("token fetch", () => {
  it("get pass list with fetch", (done) => {
    const tokenFetch: Fetch = TokenFetch({
      accessToken: (credentialsToken && credentialsToken.accessToken) || ``,
    });
    const client: CoreApiClient = new CoreApiClient({
      fetch: tokenFetch,
    });

    client.passList().then((l: List<PassBase>) => {
      done();
    });
  });

  // TODO test expiration
  // TODO test refreshing token)
  // TODO test fetch with header token
});
