'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  const isRTL = locale === 'ar';

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

      {/* Projects Grid */}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image - 16:9 Aspect Ratio */}
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={isRTL && project.titleAr ? project.titleAr : project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0F2041] to-[#FF6B00] flex items-center justify-center">
                      <span className="text-white/50 text-4xl font-bold">
                        {isRTL && project.titleAr
                          ? project.titleAr.charAt(0)
                          : project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  {project.category && project.category !== 'all' && (
                    <span
                      className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} px-3 py-1 rounded-full text-xs font-medium ${
                        categoryColors[project.category] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {categoryLabels[locale][project.category as keyof typeof categoryLabels.en] || project.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0F2041] mb-2 line-clamp-1">
                    {isRTL && project.titleAr ? project.titleAr : project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium">{isRTL && project.clientAr ? project.clientAr : project.client}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {isRTL && project.descriptionAr ? project.descriptionAr : project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(isRTL && project.tagsAr ? project.tagsAr : project.tags)
                        .slice(0, 3)
                        .map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  )}

                  {/* View Details Link */}
                  <a
                    href={`/projects/${project.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-medium text-[#FF6B00] hover:text-[#FF6B00]/80 transition-colors ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
