# Yourpass Javascript/Typescript client library

The Client Library for JavaScript/Typescript is designed for client-application developers. It offers simple, flexible access to [Yourpass API](https://doc.yourpass.eu/)

### About Yourpass

[Yourpass](https://yourpass.eu/) is a platform to create digital cards for mobile wallet.

## Installation

```shell
npm install @yourpass/api-js-client --save
```

## Usage

This chapter describe basic usage of client. You can find more examples [here](/examples).

### Create OAuth2 client

This code below describe, how create client, which is connected in to API via OAuth2.

```javascript
import { Client, createOAuthFetch } from "dist/index.js";

const productionUrlBase = "https://api.yourpass.eu";

const fetch = createOAuthFetch({
  clientId: "Your client ID",
  clientSecret: "Your client secret",
  username: "Your username",
  password: "Your password",
  url: productionUrlBase,
});

const client = new CoreClient({ fetch, urlBase: productionUrlBase });
```

### Pass listing

Code below shows how we can use client for listing passes.

```javascript
client.passList({ limit: 3 }).then((response) => {
  console.log(response);
});
```

### Pass create

Code below shows how to create new pass.

```javascript
conts pass = {
  templateId: "someTemplateId",
  dynamicData: {
    name: "Jan Novak",
    customerNr: 123456,
    loyaltyPoints: 0
  }
}

client.passCreate(pass).then((response) => {
  console.log(response);
});
```

### Pass update

Code below shows how to update new pass.

```javascript
conts pass = {
  sid: "passId",
  templateId: "someTemplateId",
  dynamicData: {
    name: "Jan Novak",
    customerNr: 123456,
    loyaltyPoints: 10
  }
}

client.passUpdate(pass).then((response) => {
  console.log(response);
});
```

### Pass patch

Code bellow switch template and update loyalty points

```javascript
conts patch = {
  id: "passId",
  templateId: "someTemplateId2",
  dynamicData: {
    loyaltyPoints: 20
  }
}

client.passPatch(patch).then((response) => {
  console.log(response);
});
```

## Documentation

For more details please visit ["generated TypeDoc documentation"](docs/).
For more information about API see [Yourpass API](https://doc.yourpass.eu/)

## Development

### Commands

- `npm run build` - compile typescript in to dist/ folder
- `npm run lint` - runs tslint check
- `npm run test` - runs all test
- `npm run test:unit` - runs unit tests
- `npm run test:integration` - runs integration test (see: [Itentegration test configuration](#itentegration-test-configuration))
- `npm run typedoc` - runs generate typedoc documentation
- `npm run prettier` - runs prettier to format code
- `npm publish --access public` - publish in npm registry

### Comfigure Test

Create .env file with your test account:

```
TEST_USERNAME=...
TEST_PASSWORD=...
TEST_CLIENT_ID=...
TEST_CLIENT_SECRET=...
TEST_API_URL=...
```

## Licence

Apache License 2.0
