import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/data/experiences';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = experiences.find(e => e.id === id);

  if (!experience) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Experiência não encontrada</h1>
        <Button asChild>
          <Link to="/experiencias">Voltar às experiências</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <Button asChild variant="ghost">
          <Link to="/experiencias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar às experiências
          </Link>
        </Button>

        <div className="space-y-4">
          <div className="text-primary font-semibold">{experience.period}</div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">{experience.title}</h1>
          <p className="text-xl text-muted-foreground">{experience.company}</p>
        </div>

        {experience.image && (
          <img
            src={experience.image}
            alt={experience.company}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}

        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{experience.fullDescription || experience.description}</p>
            </div>

            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Responsabilidades</h3>
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Tecnologias utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {experience.link && (
              <Button asChild>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver empresa
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
