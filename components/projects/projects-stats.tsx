'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

interface ProjectsStatsProps {
  locale: 'en' | 'ar';
}

const statsContent = {
  en: {
    headline: 'Delivering Excellence Across Industries',
    subtext: "View our projects below to see how we've transformed businesses throughout Jordan with innovative technology solutions.",
    stats: [
      { value: 500, suffix: '+', label: 'Projects Completed' },
      { value: 10, suffix: '+', label: 'Industries Served' },
      { value: 100, suffix: '+', label: 'Enterprise Clients' },
    ],
  },
  ar: {
    headline: 'تقديم التميز عبر الصناعات',
    subtext: 'شاهد مشاريعنا أدناه لرؤية كيف حولنا الشركات في جميع أنحاء الأردن بحلول تقنية مبتكرة.',
    stats: [
      { value: 500, suffix: '+', label: 'مشروع مكتمل' },
      { value: 10, suffix: '+', label: 'صناعةخدمت' },
      { value: 100, suffix: '+', label: 'عميل مؤسسي' },
    ],
  },
};

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => animation.stop();
    }
  }, [inView, value, count]);

  return <span className="text-4xl md:text-5xl font-bold text-[#FF6B00]">{displayValue}{suffix}</span>;
}

export default function ProjectsStats({ locale }: ProjectsStatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const content = statsContent[locale];
  const isRTL = locale === 'ar';

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[40vh] py-16 md:py-24 bg-slate-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2041] mb-4">
            {content.headline}
          </h2>
          <p className="text-[#0F2041]/80 text-lg md:text-xl max-w-2xl mx-auto">
            {content.subtext}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="text-[#0F2041]/80 text-lg md:text-xl mt-4 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
