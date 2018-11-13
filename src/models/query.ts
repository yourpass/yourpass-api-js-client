import { Where, Order } from "./index";

export interface Query {
  [index: string]: Where | Order | string | number;
  where?: Where;
  order?: Order;
  orderBy?: string;
  page?: number;
  limit?: number;
}
