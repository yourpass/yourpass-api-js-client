import config from "./config";
import { CredentialsClient } from "../src/fetch";
import CoreApiClient, { Pass, List, UUID } from "../src/CoreApiClient";

const fetchInstance = new CredentialsClient({
  ...config,
});

const testPassId: UUID = process.env.TEST_PASS_ID || "";

const client = new CoreApiClient({ fetchInstance });

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
