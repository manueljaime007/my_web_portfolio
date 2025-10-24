import { useState } from 'react';
import { motion } from 'framer-motion';

type FilterType = 'all' | 'events' | 'team';

interface GalleryImage {
  id: string;
  url: string;
  category: FilterType;
  alt: string;
}

const mockImages: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', category: 'events', alt: 'Event 1' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', category: 'team', alt: 'Team 1' },
  { id: '3', url: 'https://images.unsplash.com/photo--1529156069898-49953e39b3ac?w=800', category: 'events', alt: 'Event 2' },
  { id: '4', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', category: 'team', alt: 'Team 2' },
  { id: '5', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', category: 'events', alt: 'Event 3' },
  { id: '6', url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800', category: 'team', alt: 'Team 3' },
  { id: '7', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', category: 'events', alt: 'Event 4' },
  { id: '8', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', category: 'team', alt: 'Team 4' },
];

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'events', label: 'Eventos' },
  { value: 'team', label: 'Time' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredImages = activeFilter === 'all' 
    ? mockImages 
    : mockImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Galeria
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Momentos e conquistas da nossa jornada
          </p>

          {/* Filters */}
          <div className="flex gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl ${
                  index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                } ${index % 5 === 0 ? 'lg:col-span-2' : ''}`}
              >
                <motion.img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
