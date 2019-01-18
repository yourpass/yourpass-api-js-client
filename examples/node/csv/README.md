
# Yourpass csv

- simple Node.js scrtipt to manage passes from csv

## Requirements

- installed node
- csv uses `;` separator
- csv uses `"` to quotes
- first line of csv define pass object in properties, which are created by [lodash set method](https://lodash.com/docs/4.17.11#set)

## Update/create logic

- if pass parsed from csv contains id, pass is updated. If not, pass is created

```csv
"id";"templateId";"dynamicData.name";"dynamicData.email"
;"someTemplateId";"Testan Testanovic";"testan@test.com" // this pass will be created
"1";"someTemplateId";"Testan Testanovic2";"testan2@test.com" // this pass will be updated
```

## Get start

Install node module:

```shell
npm install
```

Run csv import/update

```shell
    node indes.js --help
```

```shell
    node index.js --input <INPUT_FILE_PATH> --output <OUTPUT_FILE_PATH> --clientId <CLIENT_ID> --clientSecret <CLIENT_SECRET> --url <API_URL> --username <USER> --password <PWD>
```

## Todo

- fetch json schema for template dynamic data and resolve types
- specify output file
- better parse flags/params
- add enviroment
- add dry run