import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '@/data/mockImages';
import { FilterType } from '@/interfaces/GalleryImage';


const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'events', label: 'Eventos' },
  { value: 'team', label: 'Time' },
  { value: 'academy', label: 'Academia' },
  { value: 'projects', label: 'Projectos' },
  { value: 'hackathon', label: 'Hackathon' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

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
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-[.5rem] rounded-lg font-medium transition-all ${activeFilter === filter.value
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
                className={`relative overflow-hidden rounded-xl ${index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
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
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
