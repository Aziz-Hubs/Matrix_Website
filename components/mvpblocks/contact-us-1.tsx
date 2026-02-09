'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { SparklesCore } from '@/components/ui/sparkles';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
// Modal imports removed as they are no longer needed

export default function ContactUs1() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-12 md:pt-16 pb-12 bg-transparent">
      {/* Top Fade Gradient */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #DC1E28, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #DC1E28, transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="border border-white/10 bg-neutral-950/80 mx-auto max-w-6xl overflow-hidden rounded-[28px] shadow-2xl backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10"
              >
                <div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Partner with <span className="text-[#DC1E28]">XYZ</span>
                  </h2>
                  <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
                    Reach out to our engineering team for a consultation or technical proposal.
                  </p>
                </div>

                <div className="space-y-8 mb-10">
                  {/* Headquarters */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DC1E28]/10 border border-[#DC1E28]/20">
                      <MapPin className="h-5 w-5 text-[#DC1E28]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Headquarters</h3>
                      <p className="text-neutral-400 text-sm mt-1">
                        Office 523, Akaria 2nd Building,<br />Olaya St, Riyadh.
                      </p>
                    </div>
                  </div>

                  {/* Direct Sales */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DC1E28]/10 border border-[#DC1E28]/20">
                      <Mail className="h-5 w-5 text-[#DC1E28]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Direct Sales</h3>
                      <a href="mailto:Sales@e-xyzd.com" className="text-neutral-400 text-sm mt-1 hover:text-[#DC1E28] transition-colors">
                        Sales@e-xyzd.com
                      </a>
                    </div>
                  </div>

                  {/* Support Line */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DC1E28]/10 border border-[#DC1E28]/20">
                      <Phone className="h-5 w-5 text-[#DC1E28]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Support Line</h3>
                      <p className="text-neutral-400 text-sm mt-1">
                        +966 11 460 0000
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  variant="default"
                  className="group bg-white text-black hover:bg-neutral-200 rounded-full px-6 cursor-pointer border-none"
                >
                  <a
                    href="https://www.google.com/maps?q=24.705140,46.674997"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>

                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="absolute inset-0 top-0 h-full w-full pointer-events-none opacity-20"
                  particleColor="#DC1E28"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative flex items-center justify-center overflow-hidden px-4 md:px-0 md:pr-8 lg:py-8"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden w-full h-full">
                <article className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#DC1E28] to-[#0f172a] p-6 text-white md:p-10 flex flex-col justify-between">
                  <div className="relative z-20">
                    <h3 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 leading-tight">
                      Ready to Scale?
                    </h3>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-xs">
                      Building the digital backbone for the Kingdom&apos;s most ambitious projects.
                    </p>
                  </div>

                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[400px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-10 md:-bottom-10 md:max-w-[600px] opacity-90">
                    <Earth
                      scale={1.2}
                      baseColor={[1, 1, 1]}
                      markerColor={[0.86, 0.12, 0.16]}
                      glowColor={[0.86, 0.12, 0.16]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
