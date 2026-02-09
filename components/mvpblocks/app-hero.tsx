'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  Variants,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, Brain, Server, Globe, Lock } from 'lucide-react';
import { Modal, ModalBody, ModalContent, ModalTrigger, ModalFooter } from '@/components/ui/animated-modal';

export default function AppHero() {
  // State for animated counters

  const [stats, setStats] = useState({
    projects: 0,
    uptime: 0,
    support: 0,
  });

  // Motion values for smooth counter animations
  const projectCount = useMotionValue(0);
  const uptimeCount = useMotionValue(0);
  const supportCount = useMotionValue(0);

  // Animation to count up numbers with easing
  useEffect(() => {
    const projectAnimation = animate(projectCount, 200, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setStats((prev) => ({ ...prev, projects: Math.round(latest) })),
    });

    const uptimeAnimation = animate(uptimeCount, 99.9, {
      duration: 2.5,
      ease: 'easeOut',
      onUpdate: (latest) => setStats((prev) => ({ ...prev, uptime: latest })),
    });

    const supportAnimation = animate(supportCount, 24, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => setStats((prev) => ({ ...prev, support: Math.round(latest) })),
    });

    return () => {
      projectAnimation.stop();
      uptimeAnimation.stop();
      supportAnimation.stop();
    };
  }, [projectCount, uptimeCount, supportCount]);

  // Animation variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Floating animation for the 3D visual
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Rotation animation for the orbital ring
  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear" as const,
    },
  };

  // Counter rotation for inner elements
  const counterRotateAnimation = {
    rotate: -360,
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear" as const,
    },
  };

  // Pulse animation for accent elements
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Helper function to create variants for tooltips with specific delays
  const createTooltipVariants = (delay: number): Variants => ({
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20, delay },
    },
  });

  // Badge pulse animation
  const badgePulse = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 0 rgba(220, 30, 40, 0)",
      "0 0 0 10px rgba(220, 30, 40, 0)",
      "0 0 0 0 rgba(220, 30, 40, 0)",
    ],
    borderColor: [
      "rgba(239, 68, 68, 0.4)",
      "rgba(239, 68, 68, 0.8)",
      "rgba(239, 68, 68, 0.4)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-transparent pb-8 pt-20 sm:pt-24 lg:pt-32 text-white sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column - Headline, Stats, Partners */}
        <div className="order-1 flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">


          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl lg:leading-[1.1] lg:tracking-tighter xl:text-7xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent pb-2"
            >
              The Bridge
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent pb-2"
            >
              Between Security
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block bg-gradient-to-r from-red-400 via-red-300 to-purple-400 bg-clip-text text-transparent pb-2"
            >
              and Intelligence
            </motion.span>
          </motion.h1>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-wrap justify-center gap-3 md:gap-4 lg:justify-start"
          >
            {/* Major Projects Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="rounded-xl border border-red-500/30 bg-black/50 px-5 py-3 backdrop-blur-md transition-all hover:border-red-500/50 hover:bg-black/60 cursor-default"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stats.projects}+
              </p>
              <p className="text-xs font-medium text-gray-400">Major Projects</p>
            </motion.div>

            {/* System Uptime Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="rounded-xl border border-purple-500/30 bg-black/50 px-5 py-3 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-black/60 cursor-default"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stats.uptime.toFixed(1)}%
              </p>
              <p className="text-xs font-medium text-gray-400">System Uptime</p>
            </motion.div>

            {/* Support Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="rounded-xl border border-blue-500/30 bg-black/50 px-5 py-3 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-black/60 cursor-default"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stats.support}/7
              </p>
              <p className="text-xs font-medium text-gray-400">Mission Critical Support</p>
            </motion.div>
          </motion.div>


        </div>

        {/* Center Column - 3D Visual */}
        <div className="order-2 flex justify-center lg:col-span-4 lg:order-2">
          {/* Visual Container - Relative, Scalable */}
          <div className="fadein-blur relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[420px] lg:w-[420px]">
            {/* Orbital ring */}
            <motion.div
              animate={rotateAnimation}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute h-[110%] w-[110%] rounded-full border border-red-500/20" />
              <div className="absolute h-[120%] w-[120%] rounded-full border border-purple-500/10 rotate-45" />

              {/* Orbital dots */}
              <motion.div
                className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-red-400 shadow-lg shadow-red-500/50"
                style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
              >
                <motion.div
                  animate={counterRotateAnimation}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Zap className="h-2 w-2 text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg shadow-purple-500/50"
                style={{ bottom: '0%', left: '50%', transform: 'translateX(-50%)' }}
              >
                <motion.div
                  animate={counterRotateAnimation}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Globe className="h-2 w-2 text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/50"
                style={{ top: '50%', right: '0%', transform: 'translateY(-50%)' }}
              >
                <motion.div
                  animate={counterRotateAnimation}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Lock className="h-2 w-2 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Main 3D visual with floating effect */}
            <motion.div
              animate={floatingAnimation}
              className="relative h-full w-full"
            >
              <Image
                src="https://i.postimg.cc/fLptvwMg/nexus.webp"
                alt="XYZ Dimensions Infrastructure Visualization"
                width={420}
                height={420}
                priority
                className="h-full w-full object-contain drop-shadow-[0_0_50px_#DC1E2860] transition-all duration-700 hover:scale-105 hover:drop-shadow-[0_0_70px_#DC1E2880]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-500/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Mission Critical Tag */}
            <motion.div
              variants={createTooltipVariants(0.8)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, y: -2 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 lg:top-0 rounded-xl border border-red-500/40 bg-black/90 px-3 py-1.5 sm:px-4 sm:py-2.5 backdrop-blur-xl shadow-xl shadow-red-500/10 cursor-default z-10"
            >
              <motion.div animate={pulseAnimation} className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-500/20">
                  <Shield className="h-3.5 w-3.5 text-red-400" />
                </div>
                <span className="text-sm font-semibold text-red-200">
                  Mission Critical
                </span>
              </motion.div>
            </motion.div>

            {/* AI-Powered Tag */}
            <motion.div
              variants={createTooltipVariants(1.0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, x: -2 }}
              className="absolute top-1/3 -left-4 sm:-left-12 lg:-left-20 rounded-xl border border-purple-500/40 bg-black/90 px-3 py-1.5 sm:px-4 sm:py-2.5 backdrop-blur-xl shadow-xl shadow-purple-500/10 cursor-default z-10"
            >
              <motion.div animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 0.5 } }} className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500/20">
                  <Brain className="h-3.5 w-3.5 text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-purple-200">
                  AI-Powered
                </span>
              </motion.div>
            </motion.div>

            {/* Data Centers Tag */}
            <motion.div
              variants={createTooltipVariants(1.2)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, x: 2 }}
              className="absolute top-1/2 -right-4 sm:-right-8 lg:-right-16 rounded-xl border border-emerald-500/40 bg-black/90 px-3 py-1.5 sm:px-4 sm:py-2.5 backdrop-blur-xl shadow-xl shadow-emerald-500/10 cursor-default z-10"
            >
              <motion.div animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 1 } }} className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Server className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-emerald-200">
                  Data Centers
                </span>
              </motion.div>
            </motion.div>


          </div>
        </div>

        {/* Right Column - Subheadline & CTAs */}
        <div className="order-3 flex flex-col items-center lg:col-span-4 lg:items-end lg:text-right">
          {/* Top Badge with pulse effect */}
          <Modal>
            <ModalTrigger className="mb-5 inline-flex items-center p-2 overflow-visible ring-0 outline-none hover:scale-105 transition-transform duration-200">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center"
              >
                <motion.div
                  animate={badgePulse}
                  className="inline-flex items-center rounded-full border border-red-500/40 bg-gradient-to-r from-red-500/15 to-red-600/10 px-4 py-1.5 text-xs sm:text-sm text-red-300 backdrop-blur-sm"
                >
                  <span className="mr-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-2.5 py-0.5 text-[8px] sm:text-xs font-bold text-white shadow-lg shadow-red-500/30">
                    New
                  </span>
                  <span className="font-medium">Empowering Vision 2030 Infrastructure</span>
                </motion.div>
              </motion.div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="bg-gradient-to-br from-[#0c0c14] via-[#1a1a2e] to-[#0c0c14] text-white p-0 border border-red-500/20 overflow-hidden">
                <div className="p-8 md:p-10">
                  <h4 className="text-lg md:text-2xl font-bold text-center mb-8">
                    Future-Ready <span className="px-2 py-0.5 rounded-md bg-red-600/20 border border-red-500/40 text-red-100 italic">Infrastructure</span> for The Kingdom&apos;s Expansion
                  </h4>
                  <div className="flex justify-center items-center py-4">
                    {[
                      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=500&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500&auto=format&fit=crop"
                    ].map((image, idx) => (
                      <motion.div
                        key={"infra-img-" + idx}
                        style={{
                          rotate: [-12, -6, 0, 6, 12][idx],
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="rounded-xl -mr-4 p-0.5 bg-[#1a1a2e] border border-red-500/30 flex-shrink-0 overflow-hidden shadow-2xl shadow-red-500/10"
                      >
                        <Image
                          src={image}
                          alt="infrastructure"
                          width={160}
                          height={160}
                          className="rounded-lg h-24 w-24 md:h-40 md:w-40 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40">
                        <Globe className="h-5 w-5 text-red-500" />
                      </div>
                      <span className="text-sm font-medium text-white/90">Vision 2030 Alignment</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                        <Zap className="h-5 w-5 text-purple-500" />
                      </div>
                      <span className="text-sm font-medium text-white/90">Smart City Core</span>
                    </div>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4 bg-black/40 p-6 border-t border-red-500/20">
                <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Dismiss</button>
                <button className="bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-6 py-2 rounded-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all">Read Whitepaper</button>
              </ModalFooter>
            </ModalBody>
          </Modal>
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-md px-4 text-center text-base leading-relaxed text-slate-300/90 sm:text-lg lg:px-0 lg:text-end"
          >
            <span className="font-bold text-white">XYZ Dimensions</span> connects advanced AI tools with physical infrastructure, giving enterprises the power to{' '}
            <span className="font-semibold text-white">build beyond limits</span>.{' '}
            <span className="text-red-300">One partner. Endless potential.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col flex-wrap gap-4 sm:flex-row lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="group relative overflow-hidden rounded-full border-t border-red-300/50 bg-gradient-to-b from-red-500 via-red-600 to-red-900 px-8 py-6 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-all hover:shadow-red-600/50"
                size="lg"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Start Transforming
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-red-500/40 bg-transparent px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-red-500/60 hover:bg-red-500/15 hover:text-white"
                size="lg"
              >
                <Link href="/solutions">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Strategic Partners (Moved) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 lg:items-end"
          >
            <span className="text-xs font-medium text-slate-400">
              Strategic Technology Partners
            </span>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-end">
              {[
                { name: 'Cisco', color: 'bg-blue-400' },
                { name: 'Bosch', color: 'bg-red-400' },
                { name: 'HPE', color: 'bg-green-400' },
                { name: '+5 more', color: 'bg-yellow-400' },
              ].map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex cursor-default items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800"
                >
                  <div className={`h-2 w-2 rounded-full ${partner.color}`}></div>
                  {partner.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow effects - enhanced */}
      <div className="absolute right-auto -bottom-40 left-1/2 h-96 w-32 -translate-x-1/2 -rotate-45 rounded-full bg-red-500/20 blur-[100px] lg:right-96 lg:left-auto lg:translate-x-0"></div>
      <div className="absolute right-auto -bottom-52 left-1/2 h-96 w-24 -translate-x-1/2 -rotate-45 rounded-full bg-purple-500/15 blur-[100px] lg:right-auto lg:left-auto lg:translate-x-0"></div>
      <div className="absolute right-auto -bottom-60 left-1/2 h-96 w-16 -translate-x-20 -rotate-45 rounded-full bg-gray-300/20 blur-[80px] lg:right-96 lg:left-auto lg:-translate-x-40"></div>

      {/* Additional accent light */}
      <motion.div
        layout
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-red-600/10 blur-[100px]"
      />
    </section>
  );
}
