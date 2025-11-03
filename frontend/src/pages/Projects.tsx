import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { SiGithub } from 'react-icons/si'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Project } from '@/interfaces/Project';

export default function Projects() {


  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [projectos, setProjectos] = useState<Project[]>([]);

  // Função para carregar projetos da API
  async function loadProjects(url: string) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      const adapted_data: Project[] = data.map((p: any) => ({
        id: String(p.id),
        title: p.title,
        description: p.description,
        fullDescription: p.fullDescription || '',
        image: p.image,
        tags: p.tags || [],
        type: p.type,
        links: {
          site: p.link || '',
          github: p.github || '',
          playStore: p.playStore || '',
          appStore: p.appStore || ''
        }
      }));

      setProjectos(adapted_data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {

    const interval = setInterval(() => {
      loadProjects('https://guanadev.vercel.app/api/v1/projects');
    }, 100000)

    loadProjects('https://guanadev.vercel.app/api/v1/projects');

    return () => clearInterval(interval);
  }, []);

  // Obter todas as tecnologias únicas para os filtros
  const allTechs = Array.from(new Set(projectos.flatMap(p => p.tags)));

  // Função para filtrar projetos com base em tipo, pesquisa e tecnologia
  const filterProjects = (type: 'all' | 'individual' | 'group') => {
    return projectos
      .filter(p => type === 'all' || p.type === type)
      .filter(
        p =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(p => !selectedTech || p.tags.includes(selectedTech));
  };


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
        <p className="mt-4 text-muted-foreground">Carregando projetos...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Projetos</h1>
          <p className="text-xl text-muted-foreground">Trabalhos e projetos que desenvolvi</p>
        </div>

        {/* Filtros de pesquisa e tecnologia */}
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

        {/* Tabs */}
        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="individual">Individuais</TabsTrigger>
            <TabsTrigger value="group">Em grupo</TabsTrigger>
          </TabsList>

          {['all', 'individual', 'group'].map((type) => (
            <TabsContent key={type} value={type} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProjects(type as 'all' | 'individual' | 'group').map((projecto, index) => (
                  <motion.div
                    key={projecto.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col hover-lift">
                      <CardHeader>
                        <img
                          src={
                            projecto.image && projecto.image == ''
                              ? projecto.image :
                              'placeholder.svg'
                          }
                          alt={projecto.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-heading font-semibold">{projecto.title}</h3>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <p className="text-muted-foreground mb-4">{projecto.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {projecto.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link to={`/projetos/${projecto.id}`}>Ver mais</Link>
                        </Button>

                        {projecto.links.site && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={projecto.links.site}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}

                        {projecto.links.github && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={projecto.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SiGithub className="h-4 w-4" />
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
