const config = require("./config");
const btoa = require("../dist/src/btoa").default;
const Client = require("../dist").default;

const client = new Client({
  ...config,
});

let token;

describe("auth test", () => {
  it("get base64", () => {
    btoa(config.clientId + ":" + config.clientSecret);
    //console.log(btoa(config.clientId + ":" + config.clientSecret));
  });

  it("get token should return token", (done) => {
    client.fetchToken(config.username, config.password).then((tr) => {
      token = tr;
      done();
    }, done);
  });

  it("get client create by acceessToken", (done) => {
    const expired = new Date(
      new Date().getTime() - token.expire_in * 1000 - 2 * 1000,
    );
    const client2 = Client.createByAccessToken(token.access_token, expired);
    client2.passList().then(() => {
      done();
    }, done);
  });
});
