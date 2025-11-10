import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ArrowRight, Download } from 'lucide-react';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/AnimatedBackground';

import About from './About';
import TechStack from './TechStack';

import profileImage from '@/assets/profile.jpeg';

const social_links = {
  github: "https://github.com/manueljaime007",
  linkedin: "https://www.linkedin.com/in/manuel-jaime-816a8536b/",
  instagram: "https://www.instagram.com/manuel_jaime007/",
  discord: "https://discord.com/channels/@me"
}

export default function Home() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <AnimatedBackground />

        <div className="container mx-auto px-6 md:px-8 py-20">

          {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
          <div className="
              flex flex-col gap-[5rem] justify-center 
              lg:gap-[15rem] lg:justify-between lg:flex-row
              items-center
          ">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Olá! Sou o <br /> <span className='text-primary'>Manuel Jaime</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                {/* Desenvolvedor Web & Mobile Júnior, especializado em criar experiências web modernas, escaláveis e de alta performance usando as tecnologias mais recentes. */}
                Desenvolvedor Web Júnior, aprendendo todos os dias e criando soluções práticas com as tecnologias mais recentes.
              </p>

              <div className="flex flex-wrap gap-8 md:gap-4">
                <Button asChild size="lg" className="group w-[100%] md:w-fit">
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
                  <a href={social_links.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiLinkedin className='mr-2 h-6 w-6' />
                </a>

                <a
                  href={social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiInstagram className='mr-2 h-6 w-6' />
                </a>

                <a
                  href={social_links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaDiscord className="h-6 w-6" />
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


      {/* About */}
      <About />
      {/* TechStack */}
      <TechStack />
    </>
  );
}
