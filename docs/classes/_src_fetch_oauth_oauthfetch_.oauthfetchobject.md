[@yourpass/api-js-client](../README.md) > ["src/fetch/oauth/OauthFetch"](../modules/_src_fetch_oauth_oauthfetch_.md) > [OAuthFetchObject](../classes/_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

# Class: OAuthFetchObject

## Hierarchy

**OAuthFetchObject**

## Index

### Constructors

* [constructor](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#constructor)

### Properties

* [authUrl](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#authurl)
* [clientId](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#clientid)
* [clientSecret](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#clientsecret)
* [password](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#password)
* [token](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#token)
* [username](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#username)

### Methods

* [fetch](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#fetch)
* [fetchToken](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#fetchtoken)
* [getToken](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md#gettoken)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OAuthFetchObject**(opts?: *[OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md)*): [OAuthFetchObject](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

*Defined in src/fetch/oauth/OauthFetch.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opts | [OAuthOptions](../interfaces/_src_fetch_oauth_oauthfetch_.oauthoptions.md) |

**Returns:** [OAuthFetchObject](_src_fetch_oauth_oauthfetch_.oauthfetchobject.md)

___

## Properties

<a id="authurl"></a>

### `<Private>` authUrl

**● authUrl**: *`string`*

*Defined in src/fetch/oauth/OauthFetch.ts:27*

___
<a id="clientid"></a>

### `<Private>``<Optional>` clientId

**● clientId**: * `undefined` &#124; `string`
*

*Defined in src/fetch/oauth/OauthFetch.ts:25*

___
<a id="clientsecret"></a>

### `<Private>``<Optional>` clientSecret

**● clientSecret**: * `undefined` &#124; `string`
*

*Defined in src/fetch/oauth/OauthFetch.ts:26*

___
<a id="password"></a>

### `<Private>``<Optional>` password

**● password**: * `undefined` &#124; `string`
*

*Defined in src/fetch/oauth/OauthFetch.ts:24*

___
<a id="token"></a>

### `<Private>``<Optional>` token

**● token**: *[OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md)*

*Defined in src/fetch/oauth/OauthFetch.ts:28*

___
<a id="username"></a>

### `<Private>``<Optional>` username

**● username**: * `undefined` &#124; `string`
*

*Defined in src/fetch/oauth/OauthFetch.ts:23*

___

## Methods

<a id="fetch"></a>

###  fetch

▸ **fetch**(input: *`RequestInfo`*, init: * `RequestInit` &#124; `undefined`*): `Promise`<`Response`>

*Defined in src/fetch/oauth/OauthFetch.ts:68*

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

*Defined in src/fetch/oauth/OauthFetch.ts:40*

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

*Defined in src/fetch/oauth/OauthFetch.ts:83*

**Returns:** `Promise`< [OAuthToken](_src_fetch_oauth_oauthtoken_.oauthtoken.md) &#124; `undefined`>

___

