export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  fullDescription?: string;
  responsibilities?: string[];
  technologies?: string[];

  projects?: { name: string; description: string; link?: string }[];

  image?: string;
  link?: string;
}
