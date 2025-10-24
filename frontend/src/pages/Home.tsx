import { ArrowRight, Download, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';

export default function Home() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-6 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Especializado em criar experiências web modernas, escaláveis e de alta performance usando as tecnologias mais recentes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/projetos">
                  Ver projetos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Baixar CV
                </a>
              </Button>
              
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Sobre mim</h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-center md:text-left">
            <p>
              Sou um desenvolvedor full-stack com forte experiência em tecnologias web modernas.
              A minha jornada no desenvolvimento começou há vários anos, e desde então tenho me
              dedicado a criar aplicações web escaláveis, eficientes e com excelente experiência de usuário.
            </p>
            
            <p>
              Especializo-me em React, TypeScript, Node.js e arquitetura de aplicações modernas.
              Tenho paixão por código limpo, boas práticas e por aprender constantemente novas
              tecnologias para melhorar as minhas skills.
            </p>
            
            <p>
              Quando não estou a programar, gosto de contribuir para projetos open source,
              ler sobre novas tendências em tecnologia e partilhar conhecimento com a comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projetos completos</div>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
