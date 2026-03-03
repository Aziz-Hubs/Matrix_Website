'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './project-card';

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

interface ProjectsGridProps {
  projects: Project[];
  locale: 'en' | 'ar';
}

const CATEGORIES = ['all', 'healthcare', 'education', 'government', 'finance', 'defense'];

const categoryColors: Record<string, string> = {
  healthcare: 'bg-green-100 text-green-700',
  education: 'bg-blue-100 text-blue-700',
  government: 'bg-purple-100 text-purple-700',
  defense: 'bg-red-100 text-red-700',
  finance: 'bg-yellow-100 text-yellow-700',
};

const categoryLabels = {
  en: {
    all: 'All',
    healthcare: 'Healthcare',
    education: 'Education',
    government: 'Government',
    finance: 'Finance',
    defense: 'Defense',
  },
  ar: {
    all: 'الكل',
    healthcare: 'الرعاية الصحية',
    education: 'التعليم',
    government: 'الحكومي',
    finance: 'المالية',
    defense: 'الدفاع',
  },
};

const emptyStateMessages = {
  en: 'No projects found',
  ar: 'لم يتم العثور على مشاريع',
};

export default function ProjectsGrid({ projects, locale }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div
        className="flex gap-3 overflow-x-auto pb-6 px-1 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const categoryColor = category !== 'all' ? categoryColors[category] : '';

          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              role="tab"
              aria-pressed={isActive}
              aria-label={categoryLabels[locale][category as keyof typeof categoryLabels.en]}
              className={`
                flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base
                transition-all duration-200 whitespace-nowrap
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2
                ${
                  isActive
                    ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30'
                    : categoryColor
                    ? `${categoryColor} border hover:border-[#FF6B00] hover:text-[#FF6B00]`
                    : 'bg-white text-[#0F2041] border border-[#0F2041]/20 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                }
              `}
            >
              {categoryLabels[locale][category as keyof typeof categoryLabels.en]}
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid - Masonry Layout */}
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-16"
          >
            <p className="text-lg text-gray-500">{emptyStateMessages[locale]}</p>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
