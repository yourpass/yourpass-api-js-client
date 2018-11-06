import { UUID } from "./index";

export interface TranslatedImageReference {
  [key: string]: UUID;
}

export type ImageReference = UUID | TranslatedImageReference;

export interface ImageReferenceMap {
  logo?: ImageReference;
  icon?: ImageReference;
  strip?: ImageReference;
  thumbnail?: ImageReference;
  footer?: ImageReference;
}
