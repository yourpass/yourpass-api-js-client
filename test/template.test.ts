import config from "./config";
import CoreClient, { Template, TemplateBase, List, UUID, createOAuthFetch } from "../index";
const fetch = createOAuthFetch({
  ...config,
});

let testPassId: UUID;

const client = new CoreClient({ fetch });

describe("pass test", () => {


  it("list", (done) => {
    client.templateList().then((response: List<TemplateBase>) => {
      testPassId = response.data[0].id
      done();
    }, done);
  });

  it("get", (done) => {
    client.templateGet(testPassId).then((response: Template) => {
      if (response){
        done();
      }
    }, done);
  });

});
