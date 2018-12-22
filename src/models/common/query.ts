import { Where, Order } from "..";

export interface Query {
  [index: string]: Where | Order | string | number;
  where?: Where;
  order?: Order;
  orderBy?: string;
  page?: number;
  limit?: number;
}
