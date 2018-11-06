const config = require("./config");
const Client = require("../dist").default;
const client = new Client({
  ...config,
});

describe("pass test", () => {
  it("get", (done) => {
    client.passGet(process.env.TEST_PASS_ID).then((response) => {
      //console.log(response);
      done();
    }, done);
  });

  it("list", (done) => {
    client.passList().then((response) => {
      //console.log(response);
      done();
    }, done);
  });

  it("list with limit", (done) => {
    client.passList({ limit: 3 }).then((response) => {
      expect(response.data.length).toEqual(3);
      done();
    }, done);
  });
});
