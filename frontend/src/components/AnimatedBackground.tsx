import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiLaravel,
  SiPostgresql,
  SiJavascript,
  SiSass,
  SiMysql,
  SiNextdotjs,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

import { motion } from 'framer-motion';

const icons = [
  { Icon: SiSass, delay: 0 },
  { Icon: SiMysql, delay: 0.5 },
  { Icon: SiNextdotjs, delay: 1 },
  { Icon: SiHtml5, delay: 2 },
  { Icon: SiCss3, delay: 2 },
  { Icon: SiTailwindcss, delay: 2.5 },
  { Icon: SiReact, delay: 0 },
  { Icon: SiTypescript, delay: 0.5 },
  { Icon: SiNodedotjs, delay: 1 },
  { Icon: SiLaravel, delay: 1.5 },
  { Icon: SiPostgresql, delay: 2 },
  { Icon: SiJavascript, delay: 2.5 },
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
            // rotate: [0, 10, -10, 0],
            rotate: [0, 360, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 20,
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
