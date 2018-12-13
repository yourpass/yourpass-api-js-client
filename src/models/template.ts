import { UUID, Resource, ImageReferenceMap } from "./";

export interface TemplateBase extends Resource {
  name: string;
  projectId: UUID;
  certificateId: UUID;
  distributable: boolean;
}

export interface Template extends TemplateBase {
  jsonTemplate: any;
  jsonSchema: any;
  dynamicDataJsonSchema: any;
  images: ImageReferenceMap;
  languages: string[];
}
