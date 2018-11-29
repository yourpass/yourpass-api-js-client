import config from "./config";
import CoreApiClient, {
  createOAuthFetch,
  Fetch,
  OAuthToken,
  createHeaderTokenFetch,
  OAuthFetchObject,
} from "../index";
import {} from "../src/fetch";
import { Viewer } from "../src/models";
import { HTTPError } from "../src/helpers/httpError";

const oauthFetchInstance = createOAuthFetch({
  ...config,
});

let credentialsToken: OAuthToken | undefined;

const checkError = (message: string, done: jest.DoneCallback) => {
  return (err: any) => {
    if (typeof err.response !== "undefined") {
      const httpError: HTTPError = err;
      if (httpError.response.statusText === message) {
        return done();
      }
    }

    if (err.message === message) {
      return done();
    }
    done(`Should recieve: ${message}`);
  };
};

describe("OAuth test", () => {
  it("get token should return token", (done) => {
    new OAuthFetchObject({ ...config })
      .fetchToken(config.username, config.password)
      .then((tr: OAuthToken) => {
        credentialsToken = tr;
        done();
      }, done);
  });

  it("get token with empty username", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.username = "";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("server_error", done));
  });

  it("get token with empty password", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.password = "";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("server_error", done));
  });

  it("get token with invalid clientId", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.clientId = "invalid";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("server_error", done));
  });

  it("get token with invalid clientSecret", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.clientSecret = "invalid";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("unauthorized_client", done));
  });

  it("get token with invalid username", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.username = "invalid";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("invalid_grant", done));
  });

  it("get token with invalid password", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.password = "invalid";
    new OAuthFetchObject(c)
      .fetchToken(c.username, c.password)
      .then(done, checkError("invalid_grant", done));
  });

  it("get viewer", (done: jest.DoneCallback) => {
    const client: CoreApiClient = new CoreApiClient({
      fetch: oauthFetchInstance,
    });
    client.getViewer().then((v: Viewer) => {
      done();
    }, done);
  });

  it("unauthorized get viewer", (done: jest.DoneCallback) => {
    const c = { ...config };
    c.password = "";
    const client: CoreApiClient = new CoreApiClient({
      fetch: createOAuthFetch(c),
    });

    client.getViewer().then(done, checkError("Unauthorized", done));
  });

  // TODO test expiration
  // TODO test refreshing token)
});

describe("header token fetch", () => {
  it("get viewer", (done: jest.DoneCallback) => {
    const tokenFetch: Fetch = createHeaderTokenFetch({
      accessToken: (credentialsToken && credentialsToken.accessToken) || ``,
    });
    const client: CoreApiClient = new CoreApiClient({
      fetch: tokenFetch,
    });

    client.getViewer().then((v: Viewer) => {
      done();
    }, done);
  });

  it("unauthorized get viewer", (done: jest.DoneCallback) => {
    const tokenFetch: Fetch = createHeaderTokenFetch({
      accessToken: ``,
    });
    const client: CoreApiClient = new CoreApiClient({
      fetch: tokenFetch,
    });

    client.getViewer().then(done, checkError("Unauthorized", done));
  });
});
