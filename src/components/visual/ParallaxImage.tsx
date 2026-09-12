import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getAssetUrl } from '../../utils/assets';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[4/3]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${aspectRatio} ${containerClassName}`}
    >
      <motion.img
        style={{ y, scale }}
        src={getAssetUrl(src)}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover select-none ${className}`}
      />
    </div>
  );
};
