[@yourpass/api-js-client](../README.md) > ["src/Client"](../modules/_src_client_.md) > [CoreClient](../classes/_src_client_.coreclient.md)

# Class: CoreClient

A class representing a core client. It prvides interface to work with Passes, Images and templates.

## Hierarchy

 [ClientBase](_src_clientbase_.clientbase.md)

**↳ CoreClient**

## Index

### Constructors

* [constructor](_src_client_.coreclient.md#constructor)

### Properties

* [fetchFunction](_src_client_.coreclient.md#fetchfunction)
* [urlBase](_src_client_.coreclient.md#urlbase)

### Methods

* [batch](_src_client_.coreclient.md#batch)
* [create](_src_client_.coreclient.md#create)
* [delete](_src_client_.coreclient.md#delete)
* [fetch](_src_client_.coreclient.md#fetch)
* [get](_src_client_.coreclient.md#get)
* [getViewer](_src_client_.coreclient.md#getviewer)
* [list](_src_client_.coreclient.md#list)
* [passBatch](_src_client_.coreclient.md#passbatch)
* [passCreate](_src_client_.coreclient.md#passcreate)
* [passDelete](_src_client_.coreclient.md#passdelete)
* [passGet](_src_client_.coreclient.md#passget)
* [passList](_src_client_.coreclient.md#passlist)
* [passPatch](_src_client_.coreclient.md#passpatch)
* [passUpdate](_src_client_.coreclient.md#passupdate)
* [patch](_src_client_.coreclient.md#patch)
* [templateGet](_src_client_.coreclient.md#templateget)
* [templateList](_src_client_.coreclient.md#templatelist)
* [update](_src_client_.coreclient.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CoreClient**(opts: *[ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md)*): [CoreClient](_src_client_.coreclient.md)

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[constructor](_src_clientbase_.clientbase.md#constructor)*

*Defined in [src/ClientBase.ts:29](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L29)*

Create a DefaultClient.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| opts | [ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md) |  Contains fetch function and enviroment. |

**Returns:** [CoreClient](_src_client_.coreclient.md)

___

## Properties

<a id="fetchfunction"></a>

###  fetchFunction

**● fetchFunction**: *[Fetch](../modules/_src_fetch_fetch_.md#fetch)*

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[fetchFunction](_src_clientbase_.clientbase.md#fetchfunction)*

*Defined in [src/ClientBase.ts:27](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L27)*

fetchFunction function for call http request

___
<a id="urlbase"></a>

###  urlBase

**● urlBase**: *`string`*

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[urlBase](_src_clientbase_.clientbase.md#urlbase)*

*Defined in [src/ClientBase.ts:29](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L29)*

enviroment for which was client created

___

## Methods

<a id="batch"></a>

###  batch

▸ **batch**<`T`>(urlBase: *`string`*, resource: *`string`*, batch: *[Batch](../modules/_src_models_common_batch_.md#batch)<`T`>*, size?: *`number`*): `Promise`<[BatchResponse](../modules/_src_models_common_batch_.md#batchresponse)<`T`>>

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[batch](_src_clientbase_.clientbase.md#batch)*

*Defined in [src/ClientBase.ts:147](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L147)*

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
<a id="create"></a>

###  create

▸ **create**<`T`>(urlBase: *`string`*, resource: *`string`*, object: *`any`*): `Promise`<`T`>

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[create](_src_clientbase_.clientbase.md#create)*

*Defined in [src/ClientBase.ts:87](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L87)*

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

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[delete](_src_clientbase_.clientbase.md#delete)*

*Defined in [src/ClientBase.ts:127](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L127)*

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

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[fetch](_src_clientbase_.clientbase.md#fetch)*

*Defined in [src/ClientBase.ts:43](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L43)*

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

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[get](_src_clientbase_.clientbase.md#get)*

*Defined in [src/ClientBase.ts:78](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L78)*

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

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[getViewer](_src_clientbase_.clientbase.md#getviewer)*

*Defined in [src/ClientBase.ts:183](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L183)*

Returns current user object (viewer) instance

**Returns:** `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

___
<a id="list"></a>

###  list

▸ **list**<`T`>(urlBase: *`string`*, resource: *`string`*, query?: *[Query](../interfaces/_src_models_common_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<`T`>>

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[list](_src_clientbase_.clientbase.md#list)*

*Defined in [src/ClientBase.ts:55](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L55)*

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
<a id="passbatch"></a>

###  passBatch

▸ **passBatch**(batches: *[Batch](../modules/_src_models_common_batch_.md#batch)<[Pass](../modules/_src_models_pass_.md#pass)>*, batchSize?: * `undefined` &#124; `number`*): `Promise`<[BatchResponse](../modules/_src_models_common_batch_.md#batchresponse)<[Pass](../modules/_src_models_pass_.md#pass)>>

*Defined in [src/Client.ts:92](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L92)*

Pass Batch

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| batches | [Batch](../modules/_src_models_common_batch_.md#batch)<[Pass](../modules/_src_models_pass_.md#pass)> |  \- |
| `Optional` batchSize |  `undefined` &#124; `number`|   |

**Returns:** `Promise`<[BatchResponse](../modules/_src_models_common_batch_.md#batchresponse)<[Pass](../modules/_src_models_pass_.md#pass)>>

___
<a id="passcreate"></a>

###  passCreate

▸ **passCreate**(pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/Client.ts:35](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L35)*

Create new pass

**Parameters:**

**pass: `object`**

new pass object

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData | `any` |
| `Optional` dynamicImages | [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) |
| templateId | [UUID](../modules/_src_models_common_uuid_.md#uuid) |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passdelete"></a>

###  passDelete

▸ **passDelete**(pass: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/Client.ts:83](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L83)*

Delete Pass

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pass | [UUID](../modules/_src_models_common_uuid_.md#uuid) |   |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passget"></a>

###  passGet

▸ **passGet**(id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/Client.ts:27](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L27)*

Read pass instance with ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |  pass id |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passlist"></a>

###  passList

▸ **passList**(query?: *[Query](../interfaces/_src_models_common_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<[PassBase](../interfaces/_src_models_pass_.passbase.md)>>

*Defined in [src/Client.ts:19](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` query | [Query](../interfaces/_src_models_common_query_.query.md) |

**Returns:** `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<[PassBase](../interfaces/_src_models_pass_.passbase.md)>>

___
<a id="passpatch"></a>

###  passPatch

▸ **passPatch**(id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/Client.ts:48](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L48)*

Patch pass

**Parameters:**

**id: [UUID](../modules/_src_models_common_uuid_.md#uuid)**

**pass: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData |  `any` &#124; `null`|
| `Optional` dynamicImages |  [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) &#124; `null`|
| `Optional` templateId | [UUID](../modules/_src_models_common_uuid_.md#uuid) |
| `Optional` voided |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passupdate"></a>

###  passUpdate

▸ **passUpdate**(pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/Client.ts:64](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L64)*

Update pass

**Parameters:**

**pass: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData | `any` |
| `Optional` dynamicImages | [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |
| templateId | [UUID](../modules/_src_models_common_uuid_.md#uuid) |
| `Optional` voided |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[patch](_src_clientbase_.clientbase.md#patch)*

*Defined in [src/ClientBase.ts:112](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L112)*

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
<a id="templateget"></a>

###  templateGet

▸ **templateGet**(id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*): `Promise`<[Template](../interfaces/_src_models_template_.template.md)>

*Defined in [src/Client.ts:111](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L111)*

Read template instance with ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [UUID](../modules/_src_models_common_uuid_.md#uuid) |  pass id |

**Returns:** `Promise`<[Template](../interfaces/_src_models_template_.template.md)>

___
<a id="templatelist"></a>

###  templateList

▸ **templateList**(query?: *[Query](../interfaces/_src_models_common_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<[TemplateBase](../interfaces/_src_models_template_.templatebase.md)>>

*Defined in [src/Client.ts:103](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/Client.ts#L103)*

List of templates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` query | [Query](../interfaces/_src_models_common_query_.query.md) |   |

**Returns:** `Promise`<[List](../interfaces/_src_models_common_list_.list.md)<[TemplateBase](../interfaces/_src_models_template_.templatebase.md)>>

___
<a id="update"></a>

###  update

▸ **update**<`T`>(urlBase: *`string`*, resource: *`string`*, id: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Inherited from [ClientBase](_src_clientbase_.clientbase.md).[update](_src_clientbase_.clientbase.md#update)*

*Defined in [src/ClientBase.ts:97](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/ClientBase.ts#L97)*

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

