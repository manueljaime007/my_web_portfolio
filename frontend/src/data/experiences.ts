export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  fullDescription?: string;
  responsibilities?: string[];
  technologies?: string[];
  image?: string;
  link?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Full Stack Developer',
    company: 'Tech Company SA',
    period: '2022 - Presente',
    description: 'Desenvolvimento de aplicações web full-stack usando React, Node.js e PostgreSQL',
    fullDescription: 'Responsável pelo desenvolvimento e manutenção de aplicações web complexas, colaborando com equipas multidisciplinares.',
    responsibilities: [
      'Desenvolvimento de features frontend com React e TypeScript',
      'Criação de APIs RESTful com Node.js e Express',
      'Gestão de bases de dados PostgreSQL',
      'Code review e mentoria de desenvolvedores júnior',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker'],
    image: '/placeholder.svg',
    link: 'https://techcompany.com',
  },
  {
    id: 'exp-2',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Desenvolvimento de interfaces modernas e responsivas para diversos clientes',
    fullDescription: 'Trabalhei no desenvolvimento de websites e aplicações web para clientes de diversos setores.',
    responsibilities: [
      'Desenvolvimento de interfaces com React',
      'Implementação de designs responsivos',
      'Otimização de performance',
      'Integração com APIs REST',
    ],
    technologies: ['React', 'JavaScript', 'Sass', 'HTML', 'CSS'],
    image: '/placeholder.svg',
  },
];
