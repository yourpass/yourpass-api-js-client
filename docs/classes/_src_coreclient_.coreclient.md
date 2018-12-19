[@yourpass/api-js-client](../README.md) > ["src/CoreClient"](../modules/_src_coreclient_.md) > [CoreClient](../classes/_src_coreclient_.coreclient.md)

# Class: CoreClient

A class representing a core client. It prvides interface to work with Passes, Images and templates.

## Hierarchy

 [DefaultClient](_src_defaultclient_.defaultclient.md)

**↳ CoreClient**

## Index

### Constructors

* [constructor](_src_coreclient_.coreclient.md#constructor)

### Properties

* [enviroment](_src_coreclient_.coreclient.md#enviroment)
* [fetchFunction](_src_coreclient_.coreclient.md#fetchfunction)

### Methods

* [create](_src_coreclient_.coreclient.md#create)
* [delete](_src_coreclient_.coreclient.md#delete)
* [fetch](_src_coreclient_.coreclient.md#fetch)
* [get](_src_coreclient_.coreclient.md#get)
* [getURL](_src_coreclient_.coreclient.md#geturl)
* [getViewer](_src_coreclient_.coreclient.md#getviewer)
* [list](_src_coreclient_.coreclient.md#list)
* [passCreate](_src_coreclient_.coreclient.md#passcreate)
* [passDelete](_src_coreclient_.coreclient.md#passdelete)
* [passGet](_src_coreclient_.coreclient.md#passget)
* [passList](_src_coreclient_.coreclient.md#passlist)
* [passPatch](_src_coreclient_.coreclient.md#passpatch)
* [passUpdate](_src_coreclient_.coreclient.md#passupdate)
* [patch](_src_coreclient_.coreclient.md#patch)
* [templateGet](_src_coreclient_.coreclient.md#templateget)
* [templateList](_src_coreclient_.coreclient.md#templatelist)
* [update](_src_coreclient_.coreclient.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CoreClient**(opts: *[ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md)*): [CoreClient](_src_coreclient_.coreclient.md)

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[constructor](_src_defaultclient_.defaultclient.md#constructor)*

*Defined in [src/DefaultClient.ts:24](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L24)*

Create a DefaultClient.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| opts | [ClientOptions](../interfaces/_src_models_clientoptions_.clientoptions.md) |  Contains fetch function and enviroment. |

**Returns:** [CoreClient](_src_coreclient_.coreclient.md)

___

## Properties

<a id="enviroment"></a>

###  enviroment

**● enviroment**: *[Enviroment](../enums/_src_constants_enviroments_.enviroment.md)*

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[enviroment](_src_defaultclient_.defaultclient.md#enviroment)*

*Defined in [src/DefaultClient.ts:24](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L24)*

enviroment for which was client created

___
<a id="fetchfunction"></a>

###  fetchFunction

**● fetchFunction**: *[Fetch](../modules/_src_fetch_fetch_.md#fetch)*

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[fetchFunction](_src_defaultclient_.defaultclient.md#fetchfunction)*

*Defined in [src/DefaultClient.ts:22](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L22)*

fetchFunction function for call http request

___

## Methods

<a id="create"></a>

###  create

▸ **create**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, object: *`any`*): `Promise`<`T`>

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[create](_src_defaultclient_.defaultclient.md#create)*

*Defined in [src/DefaultClient.ts:89](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L89)*

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

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[delete](_src_defaultclient_.defaultclient.md#delete)*

*Defined in [src/DefaultClient.ts:129](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L129)*

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

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[fetch](_src_defaultclient_.defaultclient.md#fetch)*

*Defined in [src/DefaultClient.ts:45](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L45)*

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

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[get](_src_defaultclient_.defaultclient.md#get)*

*Defined in [src/DefaultClient.ts:80](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L80)*

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

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[getURL](_src_defaultclient_.defaultclient.md#geturl)*

*Defined in [src/DefaultClient.ts:38](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L38)*

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

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[getViewer](_src_defaultclient_.defaultclient.md#getviewer)*

*Defined in [src/DefaultClient.ts:138](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L138)*

Returns current user object (viewer) instance

**Returns:** `Promise`<[Viewer](_src_models_viewer_.viewer.md)>

___
<a id="list"></a>

###  list

▸ **list**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, query?: *[Query](../interfaces/_src_models_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_list_.list.md)<`T`>>

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[list](_src_defaultclient_.defaultclient.md#list)*

*Defined in [src/DefaultClient.ts:57](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L57)*

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
<a id="passcreate"></a>

###  passCreate

▸ **passCreate**(pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/CoreClient.ts:34](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L34)*

Create new pass

**Parameters:**

**pass: `object`**

new pass object

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData | `any` |
| `Optional` dynamicImages | [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) |
| templateId | [UUID](../modules/_src_models_uuid_.md#uuid) |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passdelete"></a>

###  passDelete

▸ **passDelete**(pass: *[UUID](../modules/_src_models_uuid_.md#uuid)*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/CoreClient.ts:82](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L82)*

Delete Pass

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pass | [UUID](../modules/_src_models_uuid_.md#uuid) |   |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passget"></a>

###  passGet

▸ **passGet**(id: *[UUID](../modules/_src_models_uuid_.md#uuid)*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/CoreClient.ts:26](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L26)*

Read pass instance with ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |  pass id |

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passlist"></a>

###  passList

▸ **passList**(query?: *[Query](../interfaces/_src_models_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_list_.list.md)<[PassBase](../interfaces/_src_models_pass_.passbase.md)>>

*Defined in [src/CoreClient.ts:18](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` query | [Query](../interfaces/_src_models_query_.query.md) |

**Returns:** `Promise`<[List](../interfaces/_src_models_list_.list.md)<[PassBase](../interfaces/_src_models_pass_.passbase.md)>>

___
<a id="passpatch"></a>

###  passPatch

▸ **passPatch**(id: *[UUID](../modules/_src_models_uuid_.md#uuid)*, pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/CoreClient.ts:47](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L47)*

Patch pass

**Parameters:**

**id: [UUID](../modules/_src_models_uuid_.md#uuid)**

**pass: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData |  `any` &#124; `null`|
| `Optional` dynamicImages |  [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) &#124; `null`|
| `Optional` templateId | [UUID](../modules/_src_models_uuid_.md#uuid) |
| `Optional` voided |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="passupdate"></a>

###  passUpdate

▸ **passUpdate**(pass: *`object`*): `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

*Defined in [src/CoreClient.ts:63](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L63)*

Update pass

**Parameters:**

**pass: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` dynamicData | `any` |
| `Optional` dynamicImages | [ImageReferenceMap](../interfaces/_src_models_image_.imagereferencemap.md) |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |
| templateId | [UUID](../modules/_src_models_uuid_.md#uuid) |
| `Optional` voided |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Promise`<[Pass](../modules/_src_models_pass_.md#pass)>

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[patch](_src_defaultclient_.defaultclient.md#patch)*

*Defined in [src/DefaultClient.ts:114](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L114)*

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
<a id="templateget"></a>

###  templateGet

▸ **templateGet**(id: *[UUID](../modules/_src_models_uuid_.md#uuid)*): `Promise`<[Template](../interfaces/_src_models_template_.template.md)>

*Defined in [src/CoreClient.ts:98](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L98)*

Read template instance with ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [UUID](../modules/_src_models_uuid_.md#uuid) |  pass id |

**Returns:** `Promise`<[Template](../interfaces/_src_models_template_.template.md)>

___
<a id="templatelist"></a>

###  templateList

▸ **templateList**(query?: *[Query](../interfaces/_src_models_query_.query.md)*): `Promise`<[List](../interfaces/_src_models_list_.list.md)<[TemplateBase](../interfaces/_src_models_template_.templatebase.md)>>

*Defined in [src/CoreClient.ts:90](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/CoreClient.ts#L90)*

List of templates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` query | [Query](../interfaces/_src_models_query_.query.md) |   |

**Returns:** `Promise`<[List](../interfaces/_src_models_list_.list.md)<[TemplateBase](../interfaces/_src_models_template_.templatebase.md)>>

___
<a id="update"></a>

###  update

▸ **update**<`T`>(api: *[API_URL](../enums/_src_constants_enviroments_.api_url.md)*, resource: *`string`*, id: *[UUID](../modules/_src_models_uuid_.md#uuid)*, object: *`any`*): `Promise`<`T`>

*Inherited from [DefaultClient](_src_defaultclient_.defaultclient.md).[update](_src_defaultclient_.defaultclient.md#update)*

*Defined in [src/DefaultClient.ts:99](https://github.com/yourpass/yourpass-api-js-client/blob/760fbb8/src/DefaultClient.ts#L99)*

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

