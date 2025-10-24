import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Sobre mim</h1>
          <p className="text-xl text-muted-foreground">
            Desenvolvedor apaixonado por criar soluções inovadoras
          </p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
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

            <div className="grid md:grid-cols-3 gap-6 pt-6">
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
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
