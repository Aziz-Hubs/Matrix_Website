'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectsHeroProps {
  locale: 'en' | 'ar';
}

const heroContent = {
  en: {
    headline: 'Our Projects',
    subtext: 'Explore our portfolio of successful IT implementations across government, education, healthcare, and private sectors in Jordan.',
    cta: 'Start Your Project',
  },
  ar: {
    headline: 'مشاريعنا',
    subtext: 'استكشف معرض مشاريعنا الناجحة في مجال تكنولوجيا المعلومات عبر القطاعات الحكومية والتعليمية والصحية والقطاع الخاص في الأردن.',
    cta: 'ابدأ مشروعك',
  },
};

const HERO_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop';

export default function ProjectsHero({ locale }: ProjectsHeroProps) {
  const content = heroContent[locale];
  const isRTL = locale === 'ar';

  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`flex flex-col justify-center ${
              isRTL ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2041] mb-6"
            >
              {content.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl ${
                isRTL ? 'lg:mr-auto' : 'lg:ml-auto'
              }`}
            >
              {content.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className={isRTL ? 'lg:mr-auto' : 'lg:ml-auto'}
            >
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FF6B00] text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg shadow-[#FF6B00]/30 hover:bg-[#e56000] hover:shadow-xl hover:shadow-[#FF6B00]/40 transition-all duration-300 ${
                  isRTL ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {content.cta}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`relative ${
              isRTL ? 'lg:order-first' : 'lg:order-last'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#0F2041]/10"
            >
              <Image
                src={HERO_IMAGE}
                alt="Matrix Business Technologies Projects"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2041]/10 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
