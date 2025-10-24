import { Terminal, Code2, Zap, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [
  { Icon: Terminal, delay: 0 },
  { Icon: Code2, delay: 0.5 },
  { Icon: Zap, delay: 1 },
  { Icon: Laptop, delay: 1.5 },
  { Icon: Terminal, delay: 2 },
  { Icon: Code2, delay: 2.5 },
];

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${(index * 20) % 100}%`,
            top: `${(index * 30) % 100}%`,
          }}
        >
          <item.Icon size={32} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};
