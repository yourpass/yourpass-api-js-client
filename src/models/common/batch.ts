import { UUID } from "./uuid";

interface CreateBatchItem<T> {
  method: "POST";
  data: T;
}

interface GetBatchItem<T> {
  method: "GET";
  id: UUID;
}

interface OtherBatchItem<T> {
  method: "PUT" | "DELETE" | "PATCH";
  id: UUID;
  data: T;
}

export interface BatchResponseItem<T> {
  status: {
    code: number;
    message: string[];
  };
  id?: UUID;
  data?: T;
}

export type BatchResponse<T> = Array<BatchResponseItem<T>>;

export type BatchItem<T> =
  | CreateBatchItem<T>
  | OtherBatchItem<T>
  | GetBatchItem<T>;

export type Batch<T> = Array<BatchItem<T>>;
