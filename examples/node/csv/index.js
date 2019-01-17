const fs = require("fs");
const csvjson = require("csvjson");
const _ = require("lodash")



function prepareBatches(data){
  var options = {
    delimiter: ";", // optional
    quote: '"' // optional
  };

  const parsedData = csvjson.toObject(data, options);
  var batches = [];
  for (var i = 0; i < parsedData.length; i++) {
    const item = parsedData[i];

    const pass = {}

    Object.keys(item).map((key)=>{
          _.set(pass,key,item[key]);
    })

    const batch = {
      method: pass.id? "PUT":"POST",
      id: pass.id,
      data:pass
    }
    batches.push(batch);
  }
  return batches;
}



async function importCSV(filePath) {
  // read file
  var input = fs.readFileSync(filePath, {
    encoding: "utf8"
  });

  const batches = pass.prepareBatches(input)

  console.log(JSON.stringify(batches, null, 4));

  /*
  const toWrite = csvjson.toCSV(resData, options);

  var stream = fs.createWriteStream("created.csv");
  stream.once("open", function(fd) {
    stream.write(toWrite);
    stream.end();
  });
  */

  return resData;
}



// Parse arguments
const args = {}
process.argv.forEach(function (val, index, array) {
  const arr = val.split("=")
  if (arr.length > 1){
    args[arr[0]]=arr[1]
  }
});
importCSV(args.file, args.username, args.password)

process.exit(0)