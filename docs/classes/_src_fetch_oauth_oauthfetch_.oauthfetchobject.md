[@yourpass/api-js-client](../README.md) > ["src/fetch/oauth/OAuthFetch"](../modules/_src_fetch_oauth_oauthfetch_.md) > [OAuthFetchObject](../classes/_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

# Class: OAuthFetchObject

## Hierarchy

**OAuthFetchObject**

## Index

### Constructors

* [constructor](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#constructor)

### Properties

* [clientId](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#clientid)
* [clientSecret](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#clientsecret)
* [password](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#password)
* [token](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#token)
* [url](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#url)
* [username](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#username)

### Methods

* [fetch](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#fetch)
* [fetchToken](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#fetchtoken)
* [getToken](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#gettoken)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OAuthFetchObject**(opts: *[OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md)*): [OAuthFetchObject](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

*Defined in [src/fetch/oauth/OAuthFetch.ts:26](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md) |

**Returns:** [OAuthFetchObject](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

___

## Properties

<a id="clientid"></a>

### `<Private>``<Optional>` clientId

**● clientId**: * `undefined` &#124; `string`
*

*Defined in [src/fetch/oauth/OAuthFetch.ts:23](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L23)*

___
<a id="clientsecret"></a>

### `<Private>``<Optional>` clientSecret

**● clientSecret**: * `undefined` &#124; `string`
*

*Defined in [src/fetch/oauth/OAuthFetch.ts:24](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L24)*

___
<a id="password"></a>

### `<Private>``<Optional>` password

**● password**: * `undefined` &#124; `string`
*

*Defined in [src/fetch/oauth/OAuthFetch.ts:22](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L22)*

___
<a id="token"></a>

### `<Private>``<Optional>` token

**● token**: *[OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md)*

*Defined in [src/fetch/oauth/OAuthFetch.ts:26](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L26)*

___
<a id="url"></a>

### `<Private>` url

**● url**: *`string`*

*Defined in [src/fetch/oauth/OAuthFetch.ts:25](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L25)*

___
<a id="username"></a>

### `<Private>``<Optional>` username

**● username**: * `undefined` &#124; `string`
*

*Defined in [src/fetch/oauth/OAuthFetch.ts:21](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L21)*

___

## Methods

<a id="fetch"></a>

###  fetch

▸ **fetch**(input: *`RequestInfo`*, init: * `RequestInit` &#124; `undefined`*): `Promise`<`Response`>

*Defined in [src/fetch/oauth/OAuthFetch.ts:76](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `RequestInfo` |
| init |  `RequestInit` &#124; `undefined`|

**Returns:** `Promise`<`Response`>

___
<a id="fetchtoken"></a>

###  fetchToken

▸ **fetchToken**(username: *`string`*, password: *`string`*): `Promise`<[OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md)>

*Defined in [src/fetch/oauth/OAuthFetch.ts:36](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| username | `string` |
| password | `string` |

**Returns:** `Promise`<[OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md)>

___
<a id="gettoken"></a>

### `<Protected>` getToken

▸ **getToken**(): `Promise`< [OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md) &#124; `undefined`>

*Defined in [src/fetch/oauth/OAuthFetch.ts:91](https://github.com/yourpass/yourpass-api-js-client/blob/b6d366f/src/fetch/oauth/OAuthFetch.ts#L91)*

**Returns:** `Promise`< [OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md) &#124; `undefined`>

___

