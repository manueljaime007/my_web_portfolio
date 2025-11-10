type categoryType =
  | "Frontend"
  | "Backend"
  // | "Mobile"
  | "Database"
  | "DevOps"
  | "Cloud";

  
type levelype =
  | "Básico"
  | "Intermediário"
  | "Avançado";

export const categories = [
  "Todos",
  "Frontend",
  "Backend",
  // "Mobile",
  "Database",
  "DevOps",
  "Cloud",
];

export interface Tech {
  name: string;
  icon: string;
  level?: levelype;
  category: categoryType;
}
