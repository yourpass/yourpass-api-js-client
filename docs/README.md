
yourpass-api-js-client
======================

This is draft of Yourpass API client for JS.

Installation
------------

```shell
npm install @yourpass/api-js-client --save
```

Usage
-----

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

Documentation
-------------

For more details please visit [generated TypeDoc documentation](https://yourpass.github.io/yourpass-api-js-client/index.html).

Development
-----------

### Commands

*   `npm run build` - compile typescript in to dist/ folder
*   `npm run lint` - runs tslint check
*   `npm run test` - runs test
*   `npm run typedoc` - runs generate typedoc documentation
*   `npm run prettier` - runs prettier to format code

### Configuration

Create .env file with your test account:

```
TEST_USERNAME=...
TEST_PASSWORD=...
TEST_CLIENT_ID=...
TEST_CLIENT_SECRET=...
```

Licence
-------

Apache 2.0

## Index

### External modules

* ["index"](modules/_index_.md)
* ["src/CoreClient"](modules/_src_coreclient_.md)
* ["src/DefaultClient"](modules/_src_defaultclient_.md)
* ["src/constants/enviroments"](modules/_src_constants_enviroments_.md)
* ["src/fetch/Fetch"](modules/_src_fetch_fetch_.md)
* ["src/fetch/headerToken/index"](modules/_src_fetch_headertoken_index_.md)
* ["src/fetch/index"](modules/_src_fetch_index_.md)
* ["src/fetch/oauth/OAuthToken"](modules/_src_fetch_oauth_oauthtoken_.md)
* ["src/fetch/oauth/OauthFetch"](modules/_src_fetch_oauth_oauthfetch_.md)
* ["src/fetch/oauth/index"](modules/_src_fetch_oauth_index_.md)
* ["src/helpers/btoa"](modules/_src_helpers_btoa_.md)
* ["src/helpers/url"](modules/_src_helpers_url_.md)
* ["src/models/clientOptions"](modules/_src_models_clientoptions_.md)
* ["src/models/image"](modules/_src_models_image_.md)
* ["src/models/index"](modules/_src_models_index_.md)
* ["src/models/list"](modules/_src_models_list_.md)
* ["src/models/order"](modules/_src_models_order_.md)
* ["src/models/pass"](modules/_src_models_pass_.md)
* ["src/models/query"](modules/_src_models_query_.md)
* ["src/models/resource"](modules/_src_models_resource_.md)
* ["src/models/uuid"](modules/_src_models_uuid_.md)
* ["src/models/viewer"](modules/_src_models_viewer_.md)
* ["src/models/where"](modules/_src_models_where_.md)

---

