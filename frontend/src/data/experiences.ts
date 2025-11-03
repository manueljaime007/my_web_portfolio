import { Experience } from "@/interfaces/Experience";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Estágio em Desenvolvimento Web Fullstack",
    company: "CDCI",
    period: "2024 - 2025",
    description:
      "Desenvolvimento de aplicações web full-stack usando Laravel, PHP e MySQL",
    fullDescription:
      "Responsável pelo desenvolvimento e manutenção de aplicações web complexas, colaborando com equipas multidisciplinares.",
    responsibilities: [
      "Desenvolvimento de features frontend com Blade, TailwindCSS e AlpineJS",
      "Criação de APIs RESTful com PHP e Laravel",
      "Gestão de bases de dados Mysql",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Tailwindcss", "Alpine.js"],
    // projects: [
    //   {
    //     name: "Portal de Clientes",
    //     description:
    //       "Uma plataforma para gestão de contratos e suporte em tempo real.",
    //     link: "https://techcompany.com/portal-clientes",
    //   },
    //   {
    //     name: "Dashboard de Vendas",
    //     description:
    //       "Aplicação analítica com gráficos em tempo real e filtros avançados.",
    //   },
    // ],
    image: "/placeholder.svg",
    // link: "https://techcompany.com",
  },
  {
    id: "exp-2",
    title: "Programador Autónomo",
    // company: "Digital Agency",
    company: "",
    period: "2023 - Presente",
    description:
      "Desenvolvimento de interfaces modernas e responsivas em diversos projectos durante a minha jornada de aprendizado",
    fullDescription:
      "Trabalhei no desenvolvimento de websites e aplicações web para exibir no meu portfólio.",
    responsibilities: [
      "Desenvolvimento de interfaces com React",
      "Implementação de designs responsivos",
      "Otimização de performance",
      "Integração com APIs REST",
    ],
    technologies: ["React", "JavaScript", "Sass", "HTML", "CSS"],
    projects: [
      {
        name: "Portal de Clientes",
        description:
          "Uma plataforma para gestão de contratos e suporte em tempo real.",
        link: "https://techcompany.com/portal-clientes",
      },
      {
        name: "Dashboard de Vendas",
        description:
          "Aplicação analítica com gráficos em tempo real e filtros avançados.",
      },
    ],
    image: "/placeholder.svg",
  },
];
