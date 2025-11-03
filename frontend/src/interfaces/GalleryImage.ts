export type FilterType =
  | "all"
  | "events"
  | "team"
  | "academy"
  | "projects"
  | "hackathon";

export interface GalleryImage {
  id: string;
  url: string;
  category: FilterType;
  alt: string;
}
