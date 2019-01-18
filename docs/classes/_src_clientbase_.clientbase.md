[@yourpass/api-js-client](../README.md) > ["src/ClientBase"](../modules/_src_clientbase_.md) > [ClientBase](../classes/_src_clientbase_.clientbase.md)

# Class: ClientBase

A class representing a basic client, which contains:

*   common http fetch (request) function.
*   common methods for REST resource CRUD operations (List, Get, Patch, Delete,..)
*   gother common helper functions

## Hierarchy

**ClientBase**

↳  [CoreClient](_src_client_.coreclient.md)

## Index

### Constructors

* [constructor](_src_clientbase_.clientbase.md#constructor)

### Properties

* [fetchFunction](_src_clientbase_.clientbase.md#fetchfunction)
* [urlBase](_src_clientbase_.clientbase.md#urlbase)

### Methods

* [batch](_src_clientbase_.clientbase.md#batch)
* [batchChunks](_src_clientbase_.clientbase.md#batchchunks)
* [create](_src_clientbase_.clientbase.md#create)
* [delete](_src_clientbase_.clientbase.md#delete)
* [fetch](_src_clientbase_.clientbase.md#fetch)
* [get](_src_clientbase_.clientbase.md#get)
* [getViewer](_src_clientbase_.clientbase.md#getviewer)
* [list](_src_clientbase_.clientbase.md#list)
* [patch](_src_clientbase_.clientbase.md#patch)
* [update](_src_clientbase_.clientbase.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ClientBase**(opts: *[ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md)*): [ClientBase](_src_clientbase_.clientbase.md)

*Defined in [src/ClientBase.ts:29](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L29)*

Create a DefaultClient.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| opts | [ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md) |  Contains fetch function and enviroment. |

**Returns:** [ClientBase](_src_clientbase_.clientbase.md)

___

## Properties

<a id="fetchfunction"></a>

###  fetchFunction

**● fetchFunction**: *[Fetch](../modules/_src_fetch_fetch_.md#fetch)*

*Defined in [src/ClientBase.ts:27](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L27)*

fetchFunction function for call http request

___
<a id="urlbase"></a>

###  urlBase

**● urlBase**: *`string`*

*Defined in [src/ClientBase.ts:29](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L29)*

enviroment for which was client created

___

## Methods

<a id="batch"></a>

###  batch

▸ **batch**<`T`>(urlBase: *`string`*, resource: *`string`*, batch: *[Batch](../modules/_src_models_common_batch_.md#batch)<`T`>*, size?: *`number`*): `Promise`<[BatchResponse](../modules/_src_models_common_batch_.md#batchresponse)<`T`>>

*Defined in [src/ClientBase.ts:147](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L147)*

Batch operation

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| urlBase | `string` | - |
| resource | `string` | - |
| batch | [Batch](../modules/_src_models_common_batch_.md#batch)<`T`> | - |
| `Default value` size | `number` |  BATCH_SIZE |

**Returns:** `Promise`<[BatchResponse](../modules/_src_models_common_batch_.md#batchresponse)<`T`>>

___
<a id="batchchunks"></a>

### `<Private>` batchChunks

▸ **batchChunks**<`T`>(array: *[Batch](../modules/_src_models_common_batch_.md#batch)<`T`>*, size?: *`number`*): `Array`<[Batch](../modules/_src_models_common_batch_.md#batch)<`T`>>

*Defined in [src/ClientBase.ts:133](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L133)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| array | [Batch](../modules/_src_models_common_batch_.md#batch)<`T`> | - |
| `Default value` size | `number` |  BATCH_SIZE |

**Returns:** `Array`<[Batch](../modules/_src_models_common_batch_.md#batch)<`T`>>

___
<a id="create"></a>

###  create

▸ **create**<`T`>(urlBase: *`string`*, resource: *`string`*, object: *`any`*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:87](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L87)*

Create new instance of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| object | `any` |

**Returns:** `Promise`<`T`>

___
<a id="delete"></a>

###  delete

▸ **delete**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:127](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L127)*

Delete instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |

**Returns:** `Promise`<`T`>

___
<a id="fetch"></a>

###  fetch

▸ **fetch**<`T`>(input: *`RequestInfo`*, init: *`RequestInit`*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:43](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L43)*

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

▸ **get**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:78](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L78)*

Get instance of resource on selected api for specified id

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |

**Returns:** `Promise`<`T`>

___
<a id="getviewer"></a>

###  getViewer

▸ **getViewer**(): `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

*Defined in [src/ClientBase.ts:183](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L183)*

Returns current user object (viewer) instance

**Returns:** `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

___
<a id="list"></a>

###  list

▸ **list**<`T`>(urlBase: *`string`*, resource: *`string`*, query?: *[Query](../interfaces/_src_models_common_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<`T`>>

*Defined in [src/ClientBase.ts:55](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L55)*

List of resource on selected api for specified query

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| `Optional` query | [Query](../interfaces/_src_models_common_query_.query.md) |

**Returns:** `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<`T`>>

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:112](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L112)*

Patch instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |
| object | `any` |

**Returns:** `Promise`<`T`>

___
<a id="update"></a>

###  update

▸ **update**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Defined in [src/ClientBase.ts:97](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/src/ClientBase.ts#L97)*

Update instance with id of resource on selected api

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlBase | `string` |
| resource | `string` |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |
| object | `any` |

**Returns:** `Promise`<`T`>

___

