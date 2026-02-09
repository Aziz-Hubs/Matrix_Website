'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PencilRuler, Server, ShieldCheck, Activity } from 'lucide-react';

const features = [
    {
        step: 'Step 1',
        title: 'Architect & Design',
        content:
            'We design Tier-certified data centers and security grids compliant with the highest Kingdom regulations and international standards.',
        icon: <PencilRuler className="text-red-600 h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        step: 'Step 2',
        title: 'Integrate & Deploy',
        content:
            'Seamless installation of structured cabling, fiber optics, and hardware by certified engineers, ensuring zero disruption.',
        icon: <Server className="text-red-600 h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    },
    {
        step: 'Step 3',
        title: 'Secure & Intelligent',
        content:
            'Overlaying advanced video analytics and AI threat detection to turn physical infrastructure into a smart defense system.',
        icon: <ShieldCheck className="text-red-600 h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    },
    {
        step: 'Step 4',
        title: 'Manage & Optimize',
        content:
            '24/7 mission-critical support and data management to maximize uptime and operational efficiency.',
        icon: <Activity className="text-red-600 h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
];

export default function EngineeringStandard() {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prev) => prev + 100 / (4000 / 100));
            } else {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <section className="py-24 px-8 md:px-12 relative z-20">
            {/* Top Fade Gradient - Matches TrustBar Horizon Color */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
            <div className="mx-auto w-full max-w-7xl relative z-20">
                <div className="relative mx-auto mb-16 max-w-3xl sm:text-center">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                            The Engineering Standard
                        </h2>
                        <p className="mt-4 text-lg text-neutral-400">
                            Precision at every stage of the infrastructure lifecycle.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 lg:gap-20">
                    {/* Left Side: Interactive List */}
                    <div className="order-2 space-y-6 md:order-1">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={cn(
                                    "flex items-start gap-6 rounded-xl p-4 transition-all duration-300 cursor-pointer",
                                    index === currentFeature ? "bg-white/5 border border-white/10" : "hover:bg-white/5"
                                )}
                                onClick={() => {
                                    setCurrentFeature(index);
                                    setProgress(0);
                                }}
                                initial={{ opacity: 0.3, x: -20 }}
                                animate={{
                                    opacity: index === currentFeature ? 1 : 0.5,
                                    x: 0,
                                    scale: index === currentFeature ? 1.02 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className={cn(
                                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
                                        index === currentFeature
                                            ? 'border-red-600 bg-red-600/20 text-red-500 scale-110 shadow-lg shadow-red-500/20'
                                            : 'border-neutral-800 bg-neutral-900/50 text-neutral-500',
                                    )}
                                >
                                    {feature.icon}
                                </div>

                                <div className="flex-1 pt-1">
                                    <h3 className={cn(
                                        "text-xl font-semibold transition-colors duration-300",
                                        index === currentFeature ? "text-white" : "text-neutral-500"
                                    )}>
                                        {feature.title}
                                    </h3>
                                    {index === currentFeature && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-2 text-neutral-400 text-sm md:text-base leading-relaxed"
                                        >
                                            {feature.content}
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Dynamic Image */}
                    <div
                        className={cn(
                            'relative order-1 h-[300px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:order-2 md:h-[500px] lg:h-[600px]',
                        )}
                    >
                        <AnimatePresence mode="wait">
                            {features.map(
                                (feature, index) =>
                                    index === currentFeature && (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 overflow-hidden rounded-lg"
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                                        >
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="h-full w-full object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        </motion.div>
                                    ),
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
