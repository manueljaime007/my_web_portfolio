import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filterProjects = (type: 'individual' | 'group' | 'all') => {
    return projects.filter(project => {
      const matchesType = type === 'all' || project.type === type;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = !selectedTech || project.tags.includes(selectedTech);
      
      return matchesType && matchesSearch && matchesTech;
    });
  };

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tags)));

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Projetos</h1>
          <p className="text-xl text-muted-foreground">
            Trabalhos e projetos que desenvolvi
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Pesquisar projetos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background"
          />

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTech === null ? 'default' : 'outline'}
              className="cursor-pointer px-3 py-1"
              onClick={() => setSelectedTech(null)}
            >
              Todas
            </Badge>
            {allTechs.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech === tech ? 'default' : 'outline'}
                className="cursor-pointer px-3 py-1"
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="individual">Individuais</TabsTrigger>
            <TabsTrigger value="group">Em grupo</TabsTrigger>
          </TabsList>

          {['all', 'individual', 'group'].map((type) => (
            <TabsContent key={type} value={type} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProjects(type as any).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col hover-lift">
                      <CardHeader>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-heading font-semibold">{project.title}</h3>
                      </CardHeader>
                      
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link to={`/projetos/${project.id}`}>Ver mais</Link>
                        </Button>
                        
                        {project.links.site && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        
                        {project.links.github && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}
