import { UUID, Resource, ImageReferenceMap } from "./";

export interface PassDevices {
  ios?: number;
  android?: number;
  total?: number;
}

export interface PassBase extends Resource {
  dynamicData: any;
  dynamicImages: ImageReferenceMap;
  voided: boolean;
  expirationDate?: Date;
  readonly firstRegisterAt?: Date;
  readonly lastRegisterAt?: Date;
  readonly firstUnregisterAt?: Date;
  readonly lastUnregisterAt?: Date;
  templateId: UUID;
  projectId: UUID;
  devices: PassDevices;
}

// export interface Pass extends PassBase {}
export type Pass = PassBase;
