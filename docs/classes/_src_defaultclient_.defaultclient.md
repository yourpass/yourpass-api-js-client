[@yourpass/api-js-client](../README.md) > ["src/DefaultClient"](../modules/_src_defaultclient_.md) > [DefaultClient](../classes/_src_defaultclient_.defaultclient.md)

# Class: DefaultClient

A class representing a basic client, which contains:

*   common http fetch (request) function.
*   common methods for REST resource CRUD operations (List, Get, Patch, Delete,..)
*   gother common helper functions

## Hierarchy

**DefaultClient**

↳  [CoreClient](_src_coreclient_.coreclient.md)

## Index

### Constructors

* [constructor](_src_defaultclient_.defaultclient.md#constructor)

### Properties

* [enviroment](_src_defaultclient_.defaultclient.md#enviroment)
* [fetchFunction](_src_defaultclient_.defaultclient.md#fetchfunction)

### Methods

* [create](_src_defaultclient_.defaultclient.md#create)
* [delete](_src_defaultclient_.defaultclient.md#delete)
* [fetch](_src_defaultclient_.defaultclient.md#fetch)
* [get](_src_defaultclient_.defaultclient.md#get)
* [getURL](_src_defaultclient_.defaultclient.md#geturl)
* [getViewer](_src_defaultclient_.defaultclient.md#getviewer)
* [list](_src_defaultclient_.defaultclient.md#list)
* [patch](_src_defaultclient_.defaultclient.md#patch)
* [update](_src_defaultclient_.defaultclient.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultClient**(opts: *[ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md)*): [DefaultClient](_src_defaultclient_.defaultclient.md)

*Defined in [src/DefaultClient.ts:23](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L23)*

Create a DefaultClient.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| opts | [ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md) |  Contains fetch function and enviroment. |

**Returns:** [DefaultClient](_src_defaultclient_.defaultclient.md)

___

## Properties

<a id="enviroment"></a>

###  enviroment

**● enviroment**: *[Enviroment](../enums/_src_constants_enviroments_.enviroment.md)*

*Defined in [src/DefaultClient.ts:23](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L23)*

enviroment for which was client created

___
<a id="fetchfunction"></a>

###  fetchFunction

**● fetchFunction**: *[Fetch](../modules/_src_fetch_fetch_.md#fetch)*

*Defined in [src/DefaultClient.ts:21](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L21)*

fetchFunction function for call http request

___

## Methods

<a id="create"></a>

###  create

▸ **create**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, object: *`any`*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:88](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L88)*

Create new instance of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| object | `any` |

**Returns:** `Promise`<`T`>

___
<a id="delete"></a>

###  delete

▸ **delete**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:128](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L128)*

Delete instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |

**Returns:** `Promise`<`T`>

___
<a id="fetch"></a>

###  fetch

▸ **fetch**<`T`>(input: *`RequestInfo`*, init: *`RequestInit`*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:44](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L44)*

Common http request function

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `RequestInfo` |
| init | `RequestInit` |

**Returns:** `Promise`<`T`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:79](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L79)*

Get instance of resource on selected api for specified id

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |

**Returns:** `Promise`<`T`>

___
<a id="geturl"></a>

###  getURL

▸ **getURL**(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*): `string`

*Defined in [src/DefaultClient.ts:37](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L37)*

Returns base url for api and current enviroment

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |

**Returns:** `string`

___
<a id="getviewer"></a>

###  getViewer

▸ **getViewer**(): `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

*Defined in [src/DefaultClient.ts:137](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L137)*

Returns current user object (viewer) instance

**Returns:** `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

___
<a id="list"></a>

###  list

▸ **list**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, query?: *[Query](../interfaces/_src_models_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_list_.list.md)<`T`>>

*Defined in [src/DefaultClient.ts:56](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L56)*

List of resource on selected api for specified query

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| `Optional` query | [Query](../interfaces/_src_models_query_.query.md) |

**Returns:** `Promise`<[List](../interfaces/_src_models_list_.list.md)<`T`>>

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:113](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L113)*

Patch instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |
| object | `any` |

**Returns:** `Promise`<`T`>

___
<a id="update"></a>

###  update

▸ **update**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Defined in [src/DefaultClient.ts:98](https://github.com/yourpass/yourpass-api-js-client/blob/7027c81/src/DefaultClient.ts#L98)*

Update instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [API_URL](../enums/_src_constants_enviroments_.api_url.md) |
| resource | `string` |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |
| object | `any` |

**Returns:** `Promise`<`T`>

___

