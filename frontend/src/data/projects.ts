export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  type: "individual" | "group";
  links: {
    site?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
}

