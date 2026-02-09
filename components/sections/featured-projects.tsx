'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import './featured-projects.css';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from '@/components/ui/animated-modal';

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        title: 'NEOM Logistics & Infrastructure',
        tag: 'Smart Infrastructure',
        description: 'Developing the cognitive backbone for the world\'s most ambitious urban project.',
        link: '#',
        borderColor: '#DC1E28', // Brand Red
        gradient: 'linear-gradient(145deg, #DC1E28, #000)',
    },
    {
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2069&auto=format&fit=crop',
        title: 'TBC Schools',
        tag: 'Education Safety',
        description: 'Securing 200+ educational sites with integrated surveillance and access control.',
        link: '#',
        borderColor: '#F59E0B', // Amber
        gradient: 'linear-gradient(210deg, #F59E0B, #000)',
    },
    {
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop',
        title: '"Zero Point" Data Center',
        tag: 'Critical IT Infrastructure',
        description: 'Tier-4 ready facility design with autonomous cooling and power management.',
        link: '#',
        borderColor: '#10B981', // Emerald
        gradient: 'linear-gradient(165deg, #10B981, #000)',
    },
    // Duplicates for seamless loop
    {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        title: 'NEOM Logistics',
        tag: 'Smart Infrastructure',
        description: 'Developing the cognitive backbone for the world\'s most ambitious urban project.',
        link: '#',
        borderColor: '#DC1E28',
        gradient: 'linear-gradient(145deg, #DC1E28, #000)',
    },
    {
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2069&auto=format&fit=crop',
        title: 'TBC Schools',
        tag: 'Education Safety',
        description: 'Securing 200+ educational sites with integrated surveillance and access control.',
        link: '#',
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(210deg, #F59E0B, #000)',
    },
    {
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop',
        title: '"Zero Point" Data Center',
        tag: 'Critical IT Infrastructure',
        description: 'Tier-4 ready facility design with autonomous cooling and power management.',
        link: '#',
        borderColor: '#10B981',
        gradient: 'linear-gradient(165deg, #10B981, #000)',
    },
];

export default function FeaturedProjects() {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const setX = useRef<((value: number) => void) | null>(null);
    const setY = useRef<((value: number) => void) | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    // Initialize GSAP specifics for Chroma Effect
    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        setX.current = gsap.quickSetter(el, '--x', 'px') as (value: number) => void;
        setY.current = gsap.quickSetter(el, '--y', 'px') as (value: number) => void;

        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };

        // Initial set
        if (setX.current) setX.current(pos.current.x);
        if (setY.current) setY.current(pos.current.y);
    }, []);

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = rootRef.current;
        if (!el) return;

        // Disable on touch devices
        if (window.matchMedia("(hover: none)").matches) return;

        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        gsap.to(pos.current, {
            x,
            y,
            duration: 0.45,
            ease: 'power3.out',
            onUpdate: () => {
                if (setX.current) setX.current(pos.current.x);
                if (setY.current) setY.current(pos.current.y);
            },
            overwrite: true
        });

        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: 0.6,
            overwrite: true
        });
    };

    const handleEnter = () => { };

    const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable on touch devices
        if (typeof window !== 'undefined' && window.matchMedia("(hover: none)").matches) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="relative bg-transparent py-24 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Engineering Success <span className="text-neutral-500">at Scale</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Delivering standard-setting infrastructure for the Kingdom&apos;s most critical sectors.
                </p>
            </div>

            {/* Chroma Marquee Container */}
            <div
                ref={rootRef}
                className="chroma-marquee-container relative w-full h-[500px] md:h-[600px] flex items-center"
                style={{
                    '--r': '300px',
                } as React.CSSProperties}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
                onPointerEnter={handleEnter}
            >
                {/* Infinite Slider Track */}
                <div
                    ref={sliderRef}
                    className={cn(
                        "flex gap-8 absolute left-0 pl-8 chroma-marquee-track"
                    )}
                >
                    {projects.concat(projects).map((project, i) => ( // Triple concat for safety on wide screens
                        <article
                            key={i}
                            className="chroma-card relative flex flex-col w-[350px] md:w-[450px] h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 transition-colors duration-300 group shrink-0"
                            onMouseMove={handleCardMove}
                            style={{
                                '--card-border': project.borderColor,
                                '--card-gradient': project.gradient,
                                cursor: 'pointer'
                            } as React.CSSProperties}
                        >
                            <Modal>
                                <ModalTrigger className="w-full h-full p-0 flex flex-col text-left">
                                    {/* Image Wrapper */}
                                    <div className="chroma-img-wrapper relative flex-1 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Tag Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                                            <span className="text-xs font-medium text-white tracking-wide uppercase">
                                                {project.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info Footer */}
                                    <footer className="chroma-info relative z-10 p-6 flex flex-col justify-end bg-neutral-950/80 backdrop-blur-md w-full h-[140px]">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight className="text-neutral-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </footer>
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent className="bg-neutral-950 border border-red-600/50 text-white p-0 overflow-hidden max-w-4xl w-full rounded-2xl">
                                        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                                                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wider uppercase">
                                                    {project.tag}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-10 space-y-6">
                                            <div className="prose prose-invert max-w-none">
                                                <p className="text-lg text-neutral-300 leading-relaxed">
                                                    XYZ Dimensions delivered a comprehensive infrastructure solution for this project,
                                                    integrating state-of-the-art {project.tag.toLowerCase()} technologies.
                                                    Our engineering team ensured seamless scalability and mission-critical reliability
                                                    standards were met from day one.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                                        <h4 className="text-white font-semibold mb-2">Key Delivering</h4>
                                                        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                                                            <li>End-to-end Architecture Design</li>
                                                            <li>High-Availability Grid Systems</li>
                                                            <li>AI-Driven Monitoring Integration</li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                                        <h4 className="text-white font-semibold mb-2">Impact</h4>
                                                        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                                                            <li>99.999% Operational Uptime</li>
                                                            <li>40% Reduction in Energy Costs</li>
                                                            <li>Real-time Threat Mitigation</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ModalFooter className="bg-neutral-900/50 border-t border-white/5 p-6 flex justify-between items-center rounded-b-2xl">
                                            <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Confidential Case Study</span>
                                            <button className="bg-white text-black hover:bg-neutral-200 px-6 py-2 rounded-full font-bold text-sm transition-colors cursor-pointer">
                                                View Full Report
                                            </button>
                                        </ModalFooter>
                                    </ModalContent>
                                </ModalBody>
                            </Modal>

                            {/* Hover Overlay Gradient (Chroma specific) */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay"
                                style={{
                                    background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${project.borderColor}40, transparent 80%)`
                                }}
                            />
                        </article>
                    ))}
                </div>

                {/* Global Chroma Overlay Effects */}
                <div className="chroma-overlay" />
                <div ref={fadeRef} className="chroma-fade opacity-50" />
            </div>
        </section>
    );
}
