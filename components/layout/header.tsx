"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo-component";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Solutions", link: "/solutions" },
    { name: "Careers", link: "/careers" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                {/* Logo - Left */}
                <Link href="/" className="relative z-20 flex items-center">
                    <Logo className="h-10 w-auto text-white" />
                </Link>

                {/* Nav Items - Center-Right */}
                <NavItems items={navItems} />

                {/* CTA Button - Far Right (same style as hero) */}
                <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            asChild
                            className="group relative overflow-hidden rounded-full border-t border-red-300/50 bg-gradient-to-b from-red-500 via-red-600 to-red-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:shadow-red-600/50"
                        >
                            <Link href="/contact">
                                <span className="relative z-10 flex items-center">
                                    Contact Us
                                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                                />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    {/* Logo */}
                    <Link href="/" className="relative z-20 flex items-center">
                        <Logo className="h-8 w-auto text-white" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <MobileNavToggle
                        isOpen={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={mobileMenuOpen}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="w-full py-2 text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4 w-full">
                        <Button
                            asChild
                            className="w-full rounded-full border-t border-red-300/50 bg-gradient-to-b from-red-500 via-red-600 to-red-900 text-white shadow-lg shadow-red-600/30"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Link href="/contact">
                                Contact Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
