[@yourpass/api-js-client](../README.md) > ["__test__/integration/pass.spec"](../modules/___test___integration_pass_spec_.md)

# External module: "__test__/integration/pass.spec"

## Index

### Variables

* [client](___test___integration_pass_spec_.md#client)
* [fetch](___test___integration_pass_spec_.md#fetch)
* [testPassId](___test___integration_pass_spec_.md#testpassid)

---

## Variables

<a id="client"></a>

### `<Const>` client

**● client**: *[CoreClient](../classes/_src_coreclient_.coreclient.md)* =  new CoreClient({ fetch })

*Defined in [__test__/integration/pass.spec.ts:9](https://github.com/yourpass/yourpass-api-js-client/blob/56d4416/__test__/integration/pass.spec.ts#L9)*

___
<a id="fetch"></a>

### `<Const>` fetch

**● fetch**: *`function`* =  createOAuthFetch({
  ...config,
})

*Defined in [__test__/integration/pass.spec.ts:3](https://github.com/yourpass/yourpass-api-js-client/blob/56d4416/__test__/integration/pass.spec.ts#L3)*

#### Type declaration
▸(input: *`RequestInfo`*, init?: *`RequestInit`*): `Promise`<`Response`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `RequestInfo` |
| `Optional` init | `RequestInit` |

**Returns:** `Promise`<`Response`>

___
<a id="testpassid"></a>

### `<Const>` testPassId

**● testPassId**: *[UUID](_src_models_common_uuid_.md#uuid)* =  process.env.TEST_PASS_ID || ""

*Defined in [__test__/integration/pass.spec.ts:7](https://github.com/yourpass/yourpass-api-js-client/blob/56d4416/__test__/integration/pass.spec.ts#L7)*

___

