'use client';

import { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';

interface PageBackgroundProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Shared dark background with grid pattern, gradient, glow effects, and particles
 * Used throughout the homepage for consistent styling
 */
interface Particle {
    top: string;
    left: string;
    delay: number;
    duration: number;
    scale: number;
}

// Generate random values once at module level to avoid React purity issues
const generateParticlePositions = (): Particle[] => Array.from({ length: 30 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    scale: 0.5 + Math.random() * 1.5,
}));

export function PageBackground({ children, className = '' }: PageBackgroundProps) {
    // Use state with lazy initializer to generate stable particle positions once
    const [particlePositions] = useState(generateParticlePositions);

    // Glowing effect animation
    const glowAnimation = {
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.08, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: easeInOut,
        },
    };

    return (
        <div className={`relative min-h-screen w-full bg-black text-white ${className}`}>
            {/* Background gradient - Red accent for XYZ brand */}
            <div className="fixed inset-0 z-0 h-full w-full rotate-180 items-center px-5 py-24 opacity-80 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#DC1E28_100%)]"></div>

            {/* Animated gradient overlay */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(ellipse at 30% 20%, rgba(220, 30, 40, 0.15) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 70% 80%, rgba(220, 30, 40, 0.15) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 30% 20%, rgba(220, 30, 40, 0.15) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="fixed inset-0 z-[1]"
            />

            {/* Noise texture */}
            <svg
                className="hidden md:block fixed inset-0 z-[2] h-full w-full opacity-25 pointer-events-none"
            >
                <filter id="noise-filter-page">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1.34"
                        numOctaves="4"
                        stitchTiles="stitch"
                    ></feTurbulence>
                    <feColorMatrix type="saturate" values="0"></feColorMatrix>
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="0.46"></feFuncR>
                        <feFuncG type="linear" slope="0.46"></feFuncG>
                        <feFuncB type="linear" slope="0.47"></feFuncB>
                        <feFuncA type="linear" slope="0.37"></feFuncA>
                    </feComponentTransfer>
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="1.47" intercept="-0.23" />
                        <feFuncG type="linear" slope="1.47" intercept="-0.23" />
                        <feFuncB type="linear" slope="1.47" intercept="-0.23" />
                    </feComponentTransfer>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise-filter-page)"></rect>
            </svg>

            {/* Background effects layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-black/70 to-gray-950 blur-3xl"></div>

                {/* Grid pattern with fade */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                </div>

                {/* Enhanced glow spots - hidden on mobile for performance */}
                <motion.div
                    animate={glowAnimation}
                    className="hidden md:block absolute top-10 -left-10 h-80 w-80 rounded-full bg-red-600/25 blur-[120px]"
                ></motion.div>
                <motion.div
                    animate={{ ...glowAnimation, transition: { ...glowAnimation.transition, delay: 1 } }}
                    className="hidden md:block absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]"
                ></motion.div>
                <motion.div
                    animate={glowAnimation}
                    className="hidden md:block absolute top-1/3 left-1/4 h-60 w-60 rounded-full bg-red-500/15 blur-[100px]"
                ></motion.div>
                <motion.div
                    animate={{ ...glowAnimation, transition: { ...glowAnimation.transition, delay: 2 } }}
                    className="hidden md:block absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-purple-500/15 blur-[100px]"
                ></motion.div>

                {/* Particle effects - reduced for mobile via CSS (only show first 10 on mobile, all on desktop) */}
                <div className="absolute inset-0 overflow-hidden">
                    {particlePositions.map((particle, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full bg-white ${i > 10 ? 'hidden md:block' : ''}`}
                            style={{
                                top: particle.top,
                                left: particle.left,
                                width: `${particle.scale * 2}px`,
                                height: `${particle.scale * 2}px`,
                            }}
                            animate={{
                                opacity: [0.1, 0.6, 0.1],
                                scale: [1, 1.5, 1],
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>

                {/* Floating orbs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 right-1/3 h-3 w-3 rounded-full bg-gradient-to-br from-red-400 to-purple-500 blur-[1px]"
                />
                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        x: [0, -10, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-gradient-to-br from-purple-400 to-red-500 blur-[1px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
