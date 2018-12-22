import { UUID } from "..";

export interface Resource {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
