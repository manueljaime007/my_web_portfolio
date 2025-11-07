import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Experience } from '@/interfaces/Experience';


// URL da API 
const API_BASE: string = import.meta.env.VITE_API_BASE


export default function Experiences() {

  const [loading, setLoading] = useState(true);
  const [experiences, setExperiences] = useState<Experience[]>([])

  async function loadExperiences(url: string) {
    const res = await fetch(url);
    const data = await res.json()
    setExperiences(data)
    try {
      const res = await fetch(url);
      const data = await res.json()
      setExperiences(data)

    } catch (error) {
      console.error(`Erro ao carregar experiências. ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadExperiences(`${API_BASE}/experiences`)
  }, [])
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
          key="loader"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
        <p className="mt-4 text-muted-foreground">Carregando experiências...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Experiências</h1>
          <p className="text-xl text-muted-foreground">
            Minha trajetória profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-20 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={
                          experience.image && experience.image == ''
                            ? experience.image :
                            'placeholder.svg'
                        }
                        alt={experience.company}
                        className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4"
                      />

                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="text-sm text-primary font-semibold mb-1">
                            {experience.period}
                          </div>
                          <h3 className="text-2xl font-heading font-bold">
                            {experience.title}
                          </h3>
                          <p className="text-muted-foreground">{experience.company}</p>
                        </div>

                        <p className="text-muted-foreground">{experience.description}</p>

                        <Button asChild variant="outline" size="sm">
                          <Link to={`/experiencias/${experience.id}`}>
                            Ver detalhes
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
