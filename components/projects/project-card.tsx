'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface Project {
  _id: string;
  title: string;
  titleAr?: string;
  slug: string;
  client: string;
  clientAr?: string;
  category: string;
  description: string;
  descriptionAr?: string;
  image?: string;
  tags?: string[];
  tagsAr?: string[];
  metric?: string;
}

interface ProjectCardProps {
  project: Project;
  locale: 'en' | 'ar';
  index: number;
}

// Category colors for badges
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  healthcare: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  education: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  government: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
  defense: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
  finance: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
};

const categoryLabels = {
  en: {
    healthcare: 'Healthcare',
    education: 'Education',
    government: 'Government',
    finance: 'Finance',
    defense: 'Defense',
  },
  ar: {
    healthcare: 'الرعاية الصحية',
    education: 'التعليم',
    government: 'الحكومي',
    finance: 'المالية',
    defense: 'الدفاع',
  },
};

export default function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isRTL = locale === 'ar';

  // 3D Tilt - Mouse position tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform to rotation
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate offset from center (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Varying heights for masonry: index % 3 pattern: 420px, 350px, 380px
  const heightClass = index % 3 === 0 ? 'h-[420px]' : index % 3 === 1 ? 'h-[350px]' : 'h-[380px]';

  // Get category colors or defaults
  const catColor = categoryColors[project.category] || {
    bg: 'bg-gray-500/20',
    text: 'text-gray-400',
    border: 'border-gray-500/30',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${heightClass} rounded-2xl overflow-hidden cursor-pointer group`}
    >
      {/* Glow Effect - Orange on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 107, 0, 0.15), transparent 40%)',
        }}
      />

      {/* Shadow Glow */}
      <div className="absolute inset-0 rounded-2xl shadow-lg shadow-[#FF6B00]/0 group-hover:shadow-[#FF6B00]/40 transition-shadow duration-500" />

      {/* Card Content */}
      <div className="relative w-full h-full">
        {/* Image */}
        <div className="absolute inset-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={isRTL && project.titleAr ? project.titleAr : project.title || 'Project image'}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0F2041] to-[#FF6B00] flex items-center justify-center">
              <span className="text-white/50 text-6xl font-bold">
                {isRTL && project.titleAr
                  ? project.titleAr.charAt(0)
                  : (project.title || 'P').charAt(0)}
              </span>
            </div>
          )}

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2041] via-[#0F2041]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        </div>

        {/* Category Badge - Top Corner */}
        {project.category && (
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${catColor.bg} ${catColor.text} ${catColor.border} backdrop-blur-sm`}
            >
              {categoryLabels[locale][project.category as keyof typeof categoryLabels.en] || project.category}
            </span>
          </div>
        )}

        {/* Content - Slides up on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out ${
            isRTL ? 'text-right' : 'text-left'
          } group-hover:-translate-y-4`}
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Title */}
          <h3
            className="text-xl font-bold text-white mb-2 line-clamp-2"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {isRTL && project.titleAr ? project.titleAr : (project.title || 'Untitled Project')}
          </h3>

          {/* Client */}
          <p className="text-[#FF6B00] font-medium mb-2">
            {isRTL && project.clientAr ? project.clientAr : (project.client || 'Client')}
          </p>

          {/* Description - Revealed on hover */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
              {isRTL && project.descriptionAr ? project.descriptionAr : (project.description || '')}
            </p>
          </div>

          {/* View Details Link */}
          <Link
            href={`/projects/${project.slug}`}
            className={`inline-flex items-center gap-2 text-[#FF6B00] font-medium hover:text-white transition-colors duration-300 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
            />
          </Link>
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2041] via-[#0F2041]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
