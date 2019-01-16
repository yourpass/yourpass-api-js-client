import { UUID } from "./uuid";

interface CreateBatchItem<T> {
    type: 'POST';
    data: T;
} 

interface OtherBatchItem<T> {
    type: 'GET' | 'PUT' | 'DELETE' | 'PATCH';
    id: UUID
    data: T;
} 

export interface BatchResponse<T> {
    status: {
        "code": number,
        "message": string
      },
    data: T
}


export type BatchItem<T> = CreateBatchItem<T> | OtherBatchItem<T>

export type Batch<T> = Array<BatchItem<T>>