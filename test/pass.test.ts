import config from "./config";
import { CredentialsFetch } from "../src/fetch";
import CoreApiClient, { Pass, List, UUID } from "../src/CoreApiClient";

const fetch = CredentialsFetch({
  ...config,
});

const testPassId: UUID = process.env.TEST_PASS_ID || "";

const client = new CoreApiClient({ fetch });

describe("pass test", () => {
  it("get", (done) => {
    client.passGet(testPassId).then((response: Pass) => {
      done();
    }, done);
  });

  it("list", (done) => {
    client.passList().then((response) => {
      done();
    }, done);
  });

  it("list with limit", (done) => {
    client.passList({ limit: 3 }).then((response: List<Pass>) => {
      expect(response.data.length).toEqual(3);
      done();
    }, done);
  });
});
