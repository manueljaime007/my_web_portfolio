import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Projeto não encontrado</h1>
        <Button asChild>
          <Link to="/projetos">Voltar aos projetos</Link>
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
          <Link to="/projetos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos projetos
          </Link>
        </Button>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg"
        />

        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.fullDescription || project.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.links.site && (
                <Button asChild>
                  <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver site
                  </a>
                </Button>
              )}
              
              {project.links.github && (
                <Button asChild variant="outline">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver repositório
                  </a>
                </Button>
              )}

              {project.links.playStore && (
                <Button asChild variant="outline">
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                    Play Store
                  </a>
                </Button>
              )}

              {project.links.appStore && (
                <Button asChild variant="outline">
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
