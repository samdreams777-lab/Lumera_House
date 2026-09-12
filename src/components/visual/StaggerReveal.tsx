import React from 'react';
import { motion } from 'framer-motion';

interface StaggerRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30, opacity: 0 };
      case 'down': return { y: -30, opacity: 0 };
      case 'left': return { x: 30, opacity: 0 };
      case 'right': return { x: -30, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
