[@yourpass/api-js-client](../README.md) > ["src/models/viewer"](../modules/_src_models_viewer_.md) > [Viewer](../classes/_src_models_viewer_.viewer.md)

# Class: Viewer

class Viewer represents signed user

## Hierarchy

**Viewer**

## Index

### Constructors

* [constructor](_src_models_viewer_.viewer.md#constructor)

### Properties

* [email](_src_models_viewer_.viewer.md#email)
* [id](_src_models_viewer_.viewer.md#id)
* [isAdmin](_src_models_viewer_.viewer.md#isadmin)
* [name](_src_models_viewer_.viewer.md#name)
* [projects](_src_models_viewer_.viewer.md#projects)

### Methods

* [hasPermission](_src_models_viewer_.viewer.md#haspermission)
* [hasPermissionOnProject](_src_models_viewer_.viewer.md#haspermissiononproject)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Viewer**(viewer: *[ViewerOptions](../interfaces/_src_models_viewer_.vieweroptions.md)*): [Viewer](_src_models_viewer_.viewer.md)

*Defined in [src/models/viewer.ts:65](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| viewer | [ViewerOptions](../interfaces/_src_models_viewer_.vieweroptions.md) |

**Returns:** [Viewer](_src_models_viewer_.viewer.md)

___

## Properties

<a id="email"></a>

###  email

**● email**: *`string`*

*Defined in [src/models/viewer.ts:53](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L53)*

Email address of signed user

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [src/models/viewer.ts:49](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L49)*

ID of signed user

___
<a id="isadmin"></a>

###  isAdmin

**● isAdmin**: *`boolean`*

*Defined in [src/models/viewer.ts:61](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L61)*

isAdmin says if signed user is system administrator

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [src/models/viewer.ts:57](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L57)*

Name address of signed user

___
<a id="projects"></a>

###  projects

**● projects**: *[Projects](../interfaces/_src_models_viewer_.projects.md)*

*Defined in [src/models/viewer.ts:65](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L65)*

projects is map of projectId and number represents permission

___

## Methods

<a id="haspermission"></a>

###  hasPermission

▸ **hasPermission**(permission: *[Permission](../enums/_src_models_viewer_.permission.md)*): `boolean`

*Defined in [src/models/viewer.ts:81](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L81)*

hasPermision function says if user has {permission} on any project

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| permission | [Permission](../enums/_src_models_viewer_.permission.md) |   |

**Returns:** `boolean`

___
<a id="haspermissiononproject"></a>

###  hasPermissionOnProject

▸ **hasPermissionOnProject**(projectId: *[UUID](../modules/_src_models_common_uuid_.md#uuid)*, permission: *[Permission](../enums/_src_models_viewer_.permission.md)*): `boolean`

*Defined in [src/models/viewer.ts:98](https://github.com/yourpass/yourpass-api-js-client/blob/b65bebe/src/models/viewer.ts#L98)*

hasPermisionOnProject function says if user has {permission} on project with id {projectId}

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| projectId | [UUID](../modules/_src_models_common_uuid_.md#uuid) |   |
| permission | [Permission](../enums/_src_models_viewer_.permission.md) |  \- |

**Returns:** `boolean`

___

