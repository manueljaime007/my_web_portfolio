export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  fullDescription?: string;
  responsibilities?: string[];
  technologies?: string[];

  projects?: { title: string; description: string; link?: string }[];

  image?: string;
  link?: string;
}
