'use client';

import { motion } from 'framer-motion';

interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  locale: 'en' | 'ar';
}

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

const categoryColors: Record<string, string> = {
  healthcare: 'bg-green-100 text-green-700 border-green-200',
  education: 'bg-blue-100 text-blue-700 border-blue-200',
  government: 'bg-purple-100 text-purple-700 border-purple-200',
  finance: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  defense: 'bg-red-100 text-red-700 border-red-200',
};

export default function ProjectsFilter({
  categories,
  activeCategory,
  onCategoryChange,
  locale,
}: ProjectsFilterProps) {
  return (
    <div className="w-full py-8">
      {/* Horizontal scroll container for mobile, horizontal button row for desktop */}
      <div
        className="flex gap-3 overflow-x-auto pb-4 px-1 scrollbar-hide"
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

        {categories.map((category) => {
          const isActive = activeCategory === category;
          const categoryColor = category !== 'all' ? categoryColors[category] : '';

          return (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base
                transition-all duration-200 whitespace-nowrap
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
    </div>
  );
}
