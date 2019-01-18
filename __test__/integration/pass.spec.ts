import config, { enviroment } from "./config";
import CoreClient, { Pass, List, UUID, createOAuthFetch } from "../../index";
import { Batch, BatchResponse } from "../../src/models";
const fetch = createOAuthFetch({
  ...config,
});

const testPassId: UUID = process.env.TEST_PASS_ID || "";

const client = new CoreClient({ fetch,  ...enviroment, });

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


  it("batch reads", (done) => {
    const batches:Batch<Pass> = [];
    for (let i=0;i <100;i++){
      batches.push({
        method: 'GET',
        id: testPassId, 
      })
    }

    client.passBatch(batches).then((resp: BatchResponse<Pass>) => {
      expect(resp.length).toEqual(100);
      console.log(JSON.stringify(resp,null,4));  
      done();
    }, done);
  });

});
