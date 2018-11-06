import { UUID, Resource, ImageReferenceMap } from "./"

export interface Devices {
  ios?: number,
  android?: number,
  total?: number
}

export interface PassBase extends Resource {
  dynamicData: any;
  dynamicImages: ImageReferenceMap;
  voided: boolean;
  expirationDate?: Date;
  firstRegisterAt?: Date;
  lastRegisterAt?: Date;
  firstUnregisterAt?: Date;
  lastUnregisterAt?: Date;
  templateId: UUID;
  projectId: UUID;
  devices: Devices;
}

export interface Pass extends PassBase {

}
