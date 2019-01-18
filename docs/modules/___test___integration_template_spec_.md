[@yourpass/api-js-client](../README.md) > ["__test__/integration/template.spec"](../modules/___test___integration_template_spec_.md)

# External module: "__test__/integration/template.spec"

## Index

### Variables

* [client](___test___integration_template_spec_.md#client)
* [fetch](___test___integration_template_spec_.md#fetch)
* [testTemplateId](___test___integration_template_spec_.md#testtemplateid)

---

## Variables

<a id="client"></a>

### `<Const>` client

**● client**: *[CoreClient](../classes/_src_client_.coreclient.md)* =  new Client({ fetch, ...enviroment })

*Defined in [__test__/integration/template.spec.ts:15](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/__test__/integration/template.spec.ts#L15)*

___
<a id="fetch"></a>

### `<Const>` fetch

**● fetch**: *`function`* =  createOAuthFetch({
  ...config,
})

*Defined in [__test__/integration/template.spec.ts:9](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/__test__/integration/template.spec.ts#L9)*

#### Type declaration
▸(input: *`RequestInfo`*, init?: *`RequestInit`*): `Promise`<`Response`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `RequestInfo` |
| `Optional` init | `RequestInit` |

**Returns:** `Promise`<`Response`>

___
<a id="testtemplateid"></a>

### `<Let>` testTemplateId

**● testTemplateId**: *[UUID](_src_models_common_uuid_.md#uuid)*

*Defined in [__test__/integration/template.spec.ts:13](https://github.com/yourpass/yourpass-api-js-client/blob/2b1e25c/__test__/integration/template.spec.ts#L13)*

___

