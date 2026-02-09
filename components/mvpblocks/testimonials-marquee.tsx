'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-red-500/10 p-1 py-0.5 font-bold text-red-600',
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: React.ReactNode | string | undefined;
}

export function TestimonialCard({
  description,
  name,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-6',
        // theme styles
        'border-neutral-200 bg-white border shadow-sm',
        // hover effect
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
      {...props}
    >
      <div className="text-zinc-600 text-sm font-normal select-none leading-relaxed">
        {description}
        <div className="flex flex-row py-4 gap-1">
          <Star className="size-4 fill-[#DC1E28] text-[#DC1E28]" />
          <Star className="size-4 fill-[#DC1E28] text-[#DC1E28]" />
          <Star className="size-4 fill-[#DC1E28] text-[#DC1E28]" />
          <Star className="size-4 fill-[#DC1E28] text-[#DC1E28]" />
          <Star className="size-4 fill-[#DC1E28] text-[#DC1E28]" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-4 select-none border-t border-neutral-100 pt-4">
        <div className="size-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-red-600">
          {name.charAt(0)}
        </div>

        <div>
          <p className="text-neutral-900 font-bold text-sm bg-transparent">{name}</p>
          <p className="text-neutral-500 text-xs font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonialsData = [
  {
    name: 'Eng. Fahad A.',
    role: 'Project Director, TBC (Ministry of Education)',
    img: '',
    description: (
      <p>
        XYZ Dimensions didn&apos;t just install cameras; they engineered a complete safety ecosystem. Delivering the security infrastructure for
        <Highlight className="ml-1">200+ schools</Highlight> ahead of schedule was a feat of logistics and engineering excellence.
      </p>
    ),
  },
  {
    name: 'Sarah M.',
    role: 'CTO, Leading Saudi Bank',
    img: '',
    description: (
      <p>
        Building a Tier-4 data center in a harsh desert environment requires precision. XYZ&apos;s team
        <Highlight className="mx-1">redefined what reliability means</Highlight>
        for our network.
      </p>
    ),
  },
  {
    name: 'Executive Team',
    role: 'Infrastructure Lead, NEOM Project Sector',
    img: '',
    description: (
      <p>
        For our smart city initiatives, we needed integration, not just hardware. XYZ bridged the gap between
        <Highlight className="mx-1">physical security and AI analytics</Highlight>
        perfectly.
      </p>
    ),
  },
  {
    name: 'Operations Manager',
    role: 'KAFD Facility Management',
    img: '',
    description: (
      <p>
        <Highlight className="mr-1">Zero unplanned downtime</Highlight>
        since launch. That statistic speaks for itself.
      </p>
    ),
  },
];

// Duplicate testimonials to create a richer marquee feel
const testimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-[linear-gradient(to_bottom,#000_0%,#000_30%,transparent_50%,transparent_85%,#000_100%)]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative elements - Red Glow */}
        <div className="absolute top-20 -left-20 z-0 h-96 w-96 rounded-full bg-red-600/10 blur-[128px] pointer-events-none" />
        <div className="absolute -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-red-600/5 blur-[128px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-16"
        >
          <h2 className="text-white mb-6 text-center text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Impact That Speaks
          </h2>
          <h3 className="text-neutral-400 mx-auto max-w-2xl text-center text-lg font-medium tracking-tight">
            See why the Kingdom&apos;s leading entities trust{' '}
            <span className="text-white font-semibold">XYZ Dimensions</span> with their critical infrastructure.
          </h3>
        </motion.div>

        <div className="relative mt-10 max-h-[750px] overflow-hidden">
          <div className="gap-6 md:columns-2 xl:columns-3">
            {Array(3) // Force 3 columns for better masonry layout
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    '[--duration:40s]': i === 0,
                    '[--duration:30s]': i === 1,
                    '[--duration:50s]': i === 2,
                  })}
                >
                  {testimonials.slice(i * 4, (i + 1) * 4).map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.5,
                        duration: 0.8,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>

          {/* Gradients to fade out top/bottom to blend with page bg */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full bg-gradient-to-t from-black to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 w-full bg-gradient-to-b from-black to-transparent z-20"></div>
        </div>
      </div>
    </section>
  );
}
