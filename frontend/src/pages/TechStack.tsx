import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { techStack } from '@/data/techStack';
import * as SimpleIcons from 'react-icons/si';
import { useState } from 'react';

const categories = ['Todos', 'Frontend', 'Backend', 'Database'];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredTech = selectedCategory === 'Todos'
    ? techStack
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Minha Tech Stack</h1>
          <p className="text-xl text-muted-foreground">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {filteredTech.map((tech, index) => {
            const IconComponent = (SimpleIcons as any)[tech.icon];

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="hover-lift cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                    {IconComponent && (
                      <IconComponent className="h-12 w-12 text-primary" />
                    )}
                    <div>
                      <h3 className="font-heading font-semibold">{tech.name}</h3>
                      {tech.level && (
                        <p className="text-xs text-muted-foreground mt-1">{tech.level}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
