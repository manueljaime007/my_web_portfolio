# GuanaBee Portfolio - Instruções de Personalização

## Como personalizar o portfólio

### 1. Foto de perfil
Substitua a imagem placeholder na página Home:
- Localize: `src/pages/Home.tsx`
- Substitua `src="/placeholder.svg"` pelo caminho da sua foto

### 2. Links das redes sociais
Atualize os links nas seguintes localizações:

**Header/Hero (Home):**
- Arquivo: `src/pages/Home.tsx`
- Atualize os URLs de LinkedIn, GitHub e Instagram

**Footer:**
- Arquivo: `src/components/Footer.tsx`
- Atualize os URLs das redes sociais

### 3. WhatsApp
Atualize o número do WhatsApp:
- Arquivo: `src/components/WhatsAppButton.tsx`
- Substitua `351900000000` pelo seu número (formato: código do país + número)

### 4. Tech Stack
Edite as tecnologias que domina:
- Arquivo: `src/data/techStack.ts`
- Adicione/remova tecnologias conforme necessário
- Os ícones são importados de `react-icons/si` (Simple Icons)

### 5. Projetos
Adicione/edite seus projetos:
- Arquivo: `src/data/projects.ts`
- Substitua as imagens placeholder pelos screenshots dos seus projetos
- Atualize títulos, descrições, tags e links

### 6. Experiências
Adicione suas experiências profissionais:
- Arquivo: `src/data/experiences.ts`
- Atualize períodos, empresas, descrições e tecnologias utilizadas

### 7. CV (Currículo)
Substitua o arquivo placeholder do CV:
- Localize: `public/cv.pdf`
- Substitua pelo seu CV em formato PDF

### 8. Informações de contacto
Atualize as informações de contacto:
- Arquivo: `src/pages/Contact.tsx`
- Atualize email, telefone e localização

### 9. SEO
Atualize as meta tags para SEO:
- Arquivo: `index.html`
- Atualize title, description e opengraph tags

## Estrutura de pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes shadcn
│   ├── Header.tsx      # Navbar
│   ├── Footer.tsx      # Rodapé
│   ├── ThemeToggle.tsx # Toggle dark mode
│   ├── WhatsAppButton.tsx
│   └── AnimatedBackground.tsx
├── contexts/           # Contextos React (ThemeContext)
├── data/              # Dados dos projetos/experiências/tech
├── pages/             # Páginas da aplicação
└── hooks/             # Custom hooks

public/
└── cv.pdf            # Seu currículo em PDF
```

## Como executar o projeto

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Deploy automático

### Outras plataformas
O projeto é uma aplicação Vite + React padrão e pode ser deployed em:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Qualquer serviço que suporte SPA (Single Page Application)

## Adicionar mais projetos/experiências

Basta editar os arrays nos arquivos:
- `src/data/projects.ts` - adicione objetos ao array `projects`
- `src/data/experiences.ts` - adicione objetos ao array `experiences`

As páginas serão automaticamente geradas com base nos dados.

## Suporte

Para questões técnicas ou bugs, consulte a documentação do:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
