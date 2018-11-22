import config from "./config";
import CoreApiClient, {
  createOAuthFetch,
  Fetch,
  List,
  PassBase,
  OAuthToken, createHeaderTokenFetch, OAuthFetchObject 
} from "../index";
import { } from "../src/fetch";

const oauthFetchInstance = createOAuthFetch({
  ...config,
});

let credentialsToken: OAuthToken | undefined;

describe("client credentials auth test", () => {


  it("get token should return token", (done) => {
    new OAuthFetchObject({...config})
      .fetchToken(config.username, config.password)
      .then((tr: OAuthToken) => {
        credentialsToken = tr;
        done();
      }, done);
  });

  it("get pass list with fetch", (done) => {
    const client: CoreApiClient = new CoreApiClient({
      fetch: oauthFetchInstance,
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
    const tokenFetch: Fetch = createHeaderTokenFetch({
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
