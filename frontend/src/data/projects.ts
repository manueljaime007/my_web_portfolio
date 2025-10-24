export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  type: 'individual' | 'group';
  links: {
    site?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'projeto-1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo',
    fullDescription: 'Plataforma de e-commerce desenvolvida com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de produtos, carrinho de compras e painel administrativo completo.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    type: 'individual',
    links: {
      site: 'https://example.com',
      github: 'https://github.com/user/project',
    },
  },
  {
    id: 'projeto-2',
    title: 'Task Management App',
    description: 'Aplicação de gestão de tarefas com colaboração em tempo real',
    fullDescription: 'App de gestão de tarefas com funcionalidades de colaboração em tempo real, notificações e integração com calendários.',
    image: '/placeholder.svg',
    tags: ['React', 'Express', 'MySQL', 'Tailwind CSS'],
    type: 'group',
    links: {
      github: 'https://github.com/user/project',
    },
  },
  {
    id: 'projeto-3',
    title: 'Portfolio Generator',
    description: 'Gerador automático de portfolios personalizados',
    fullDescription: 'Ferramenta que permite criar portfolios personalizados com templates modernos e exportação em diferentes formatos.',
    image: '/placeholder.svg',
    tags: ['Next.js', 'TypeScript', 'Sass'],
    type: 'individual',
    links: {
      site: 'https://example.com',
      github: 'https://github.com/user/project',
    },
  },
];
