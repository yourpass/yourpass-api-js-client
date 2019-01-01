import config from "./config";
import CoreClient, { Pass, List, UUID, createOAuthFetch } from "../../index";
const fetch = createOAuthFetch({
  ...config,
});

const testPassId: UUID = process.env.TEST_PASS_ID || "";

const client = new CoreClient({ fetch });

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
