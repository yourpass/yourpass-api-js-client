export * from "./pass"
export * from "./image"
export * from "./token"

export type UUID = string;

export interface List<T> {
  limit: number;
  page: number;
  totalCount: number;
  data: Array<T>;
}

export interface Resource {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
