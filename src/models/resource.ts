import { UUID } from "./index";

export interface Resource {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
