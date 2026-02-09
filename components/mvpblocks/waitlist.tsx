'use client';

import type React from 'react';
import { useMemo } from 'react';
import { ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Particles } from '@/components/ui/particles';
import { Spotlight } from '@/components/ui/spotlight';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

export default function WaitlistPage() {
  const { resolvedTheme } = useTheme();
  // Use useMemo to avoid setState in effect
  const color = useMemo(() => resolvedTheme === 'dark' ? '#ffffff' : '#ef4444', [resolvedTheme]);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      <Spotlight />

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color={color}
      />

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-primary/10 from-primary/15 to-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 backdrop-blur-sm"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium">Return to Home</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            'from-foreground via-foreground/80 to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-7xl',
            brico.className,
          )}
        >
          Something Great{' '}
          <span className="whitespace-nowrap bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            is Brewing
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground mt-6 mb-12 sm:text-lg max-w-lg mx-auto leading-relaxed"
        >
          Aziz is still working on this page. It&apos;s currently under construction to bring you a better experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto flex flex-col gap-4 sm:flex-row justify-center items-center"
        >
          <Link
            href="mailto:contactabdulazizhasan@gmail.com"
            className="group text-primary-foreground focus:ring-primary/50 relative overflow-hidden rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-8 py-4 font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] focus:ring-2 focus:outline-none active:scale-95 flex items-center justify-center w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Contact Aziz
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-sm text-neutral-500 font-mono"
        >
          contactabdulazizhasan@gmail.com
        </motion.p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}
