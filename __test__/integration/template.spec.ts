import config from "./config";
import CoreClient, { Template, TemplateBase, List, UUID, createOAuthFetch } from "../../index";
const fetch = createOAuthFetch({
  ...config,
});

let testTemplateId: UUID;

const client = new CoreClient({ fetch });

describe("tenplate test", () => {

  it("list", (done) => {
    client.templateList().then((response: List<TemplateBase>) => {
      testTemplateId = response.data[0].id
      done();
    }, done);
  });

  it("get", (done) => {
    client.templateGet(testTemplateId).then((response: Template) => {
      if (response){
        return done();
      }
    }, done);
  });

});
