[@yourpass/api-js-client](../README.md) > ["src/fetch/oauth/OAuthFetch"](../modules/_src_fetch_oauth_oauthfetch_.md)

# External module: "src/fetch/oauth/OAuthFetch"

## Index

### Classes

* [OAuthFetchObject](../classes/_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

### Interfaces

* [OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md)

### Variables

* [DEFAULT_AUTH_URL](_src_fetch_oauth_oauthfetch_.md#default_auth_url)

### Functions

* [createOAuthFetch](_src_fetch_oauth_oauthfetch_.md#createoauthfetch)

### Object literals

* [DEFAULT_HEADERS](_src_fetch_oauth_oauthfetch_.md#default_headers)

---

## Variables

<a id="default_auth_url"></a>

### `<Const>` DEFAULT_AUTH_URL

**● DEFAULT_AUTH_URL**: *`string`* =  profiles[Enviroment.PRODUCTION][API_URL.CORE]

*Defined in src/fetch/oauth/OAuthFetch.ts:13*

___

## Functions

<a id="createoauthfetch"></a>

###  createOAuthFetch

▸ **createOAuthFetch**(opts: *[OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md)*): [Fetch](_src_fetch_fetch_.md#fetch)

*Defined in src/fetch/oauth/OAuthFetch.ts:95*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md) |

**Returns:** [Fetch](_src_fetch_fetch_.md#fetch)

___

## Object literals

<a id="default_headers"></a>

### `<Const>` DEFAULT_HEADERS

**DEFAULT_HEADERS**: *`object`*

*Defined in src/fetch/oauth/OAuthFetch.ts:8*

<a id="default_headers.accept"></a>

####  Accept

**● Accept**: *`string`* = "application/json, application/x-www-form-urlencoded"

*Defined in src/fetch/oauth/OAuthFetch.ts:9*

___
<a id="default_headers.content_type"></a>

####  Content-Type

**● Content-Type**: *`string`* = "application/x-www-form-urlencoded"

*Defined in src/fetch/oauth/OAuthFetch.ts:10*

___

___

