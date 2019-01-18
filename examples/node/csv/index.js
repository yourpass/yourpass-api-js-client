const fs = require("fs");
const csvjson = require("csvjson");
const _ = require("lodash");
// TODO - replace by npm module
const YourpassClient = require("../../../dist/index.js");
const program = require("commander");
const pjosn = require("./package.json");

var options = {
  delimiter: ";",
  quote: '"',
};

function prepareBatches(data) {
  const parsedData = csvjson.toObject(data, options);
  var batches = [];
  for (var i = 0; i < parsedData.length; i++) {
    const item = parsedData[i];

    const pass = {};

    // TODO - try to parse data from csv to types (number/float/boolean)
    Object.keys(item).map((key) => {
      _.set(pass, key, item[key]);
    });

    if (pass.id === "") {
      delete pass.id;
    }

    const batch = {
      method: pass.id ? "PUT" : "POST",
      id: pass.id,
      data: pass,
    };
    batches.push(batch);
  }
  return batches;
}

async function importCSV(config) {
  // read file
  var input = fs.readFileSync(config.input, {
    encoding: "utf8",
  });

  // prepare batches
  const batches = prepareBatches(input);

  // create client
  const opts = {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    username: config.username,
    password: config.password,
    url: config.url,
  };
  const fetch = YourpassClient.createOAuthFetch(opts);
  const client = new YourpassClient.Client({ fetch, urlBase: config.url });

  // call batch operation
  const results = await client.passBatch(batches);

  // parse response to be printed in to
  const csvResults = [];
  for (var i = 0; i < results.length; i++) {
    const r = {
      id: results[i].data && results[i].data.id,
      dynamicData: results[i].data && results[i].data.dynamicData,
      dynamicImages: results[i].data && results[i].data.dynamicImages,
    };
    r.statusCode = results[i].status.code;
    r.statusMessage = JSON.stringify(results[i].status.messages);
    csvResults.push(r);
  }

  if (config.output) {
    const toWrite = csvjson.toCSV(csvResults, options);
    var stream = fs.createWriteStream(config.output);
    stream.once("open", function(fd) {
      stream.write(toWrite);
      stream.end();
    });
  }
}

// Parse commandline arguments
program
  .version(pjosn.version)
  .usage(
    "--input <INPUT_FILE_PATH> --output <OUTPUT_FILE_PATH> --clientId <CLIENT_ID> --clientSecret <CLIENT_SECRET> --url <API_URL> --username <USER> --password <PWD>",
  )
  .option("-f, --input [file]", "Input csv file path")
  .option("-o, --output [our]", "Input csv file path")
  .option("-u, --username [username]", "Username")
  .option("-p, --password [password]", "Password")
  .option("-c, --clientId [clientId]", "OAuth client ID")
  .option("-s, --clientSecret [clientSecret]", "OAuth client ID")
  .option("-a, --url [url]", "Api URL")
  .parse(process.argv);

const config = {
  input: program.input,
  output: program.output,
  clientId: program.clientId,
  clientSecret: program.clientSecret,
  username: program.username,
  password: program.password,
  url: program.url,
};

console.log(config);
importCSV(config);
