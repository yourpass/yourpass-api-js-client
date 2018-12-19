# yourpass-api-js-client

This is draft of Yourpass API client for JS.

## Installation

```shell
npm install @yourpass/api-js-client --save
```


## Usage

```javascript
import CoreClient, { createOAuthFetch } from "dist/index.js";

const fetch = createOAuthFetch({
  clientId: "Your client ID",
  clientSecret:"Your client secret",
  username: "Your username",
  username: "Your password",
});

const client = new CoreClient({ fetch });

client.passList({ limit: 3 }).then((response) => {
    console.log(response)
});
```

## Documentation

For more details please visit ["generated TypeDoc documentation"](docs/).

## Development

### Commands

- `npm run build` - compile typescript in to dist/ folder
- `npm run lint` - runs tslint check
- `npm run test` - runs test
- `npm run typedoc` - runs generate typedoc documentation
- `npm run prettier` - runs prettier to format code
- `npm publish --access public` - publish in npm registry

### Configuration

Create .env file with your test account:

```
TEST_USERNAME=...
TEST_PASSWORD=...
TEST_CLIENT_ID=...
TEST_CLIENT_SECRET=...
```

## Licence

Apache 2.0

