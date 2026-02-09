'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';

const data = () => ({
  navigation: {
    solutions: [
      { name: 'Security Systems', href: '/solutions/security' },
      { name: 'Data Center Engineering', href: '/solutions/data-centers' },
      { name: 'AI & Analytics', href: '/solutions/ai' },
      { name: 'Network Infrastructure', href: '/solutions/network' },
    ],
    company: [
      { name: 'About XYZ', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Our Partners', href: '/partners' },
      { name: 'Contact Sales', href: '/contact' },
    ],
    projects: [
      { name: 'Case Studies', href: '/projects/case-studies' },
      { name: 'Vision 2030 Alignment', href: '/vision-2030' },
      { name: 'Newsroom', href: '/news' },
      { name: 'Support Portal', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'ISO Certifications', href: '/certifications' },
    ],
  },
  socialLinks: [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ],
  bottomLinks: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
});

export default function FooterStandard() {
  // Use state with initial value based on typeof window check for SSR
  const [mounted] = useState(() => typeof window !== 'undefined');

  const currentYear = new Date().getFullYear();

  if (!mounted) return null;

  return (
    <footer className="relative w-full bg-[#121212] overflow-hidden pt-16 pb-8">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-radial-gradient from-[#DC1E28]/10 to-transparent opacity-50 pointer-events-none" />

      {/* Large Faded Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
        <span className="text-[15rem] md:text-[20rem] font-black uppercase text-white tracking-widest leading-none">
          DIMENSIONS
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Left Side: Brand & Subscribe */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white tracking-tight">
                  XYZ <span className="text-[#DC1E28]">Dimensions</span>
                </span>
              </Link>
              <p className="mt-4 text-neutral-400 leading-relaxed max-w-sm">
                Architecting the intelligent infrastructure of tomorrow for Saudi Arabia&apos;s most ambitious projects.
              </p>
            </div>

            <div className="flex gap-4">
              {data().socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#DC1E28] hover:border-[#DC1E28] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <label className="block text-sm font-medium text-white">
                Stay Ahead of the Curve
              </label>
              <div className="flex gap-2 max-w-sm">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#DC1E28] focus:ring-[#DC1E28]/20"
                />
                <Button className="bg-[#DC1E28] hover:bg-[#b01820] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Solutions */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#DC1E28]" />
                <h3 className="font-semibold text-white tracking-wide uppercase text-sm">Solutions</h3>
              </div>
              <ul className="space-y-4">
                {data().navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#DC1E28]" />
                <h3 className="font-semibold text-white tracking-wide uppercase text-sm">Company</h3>
              </div>
              <ul className="space-y-4">
                {data().navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Projects */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#DC1E28]" />
                <h3 className="font-semibold text-white tracking-wide uppercase text-sm">Projects & Media</h3>
              </div>
              <ul className="space-y-4">
                {data().navigation.projects.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#DC1E28]" />
                <h3 className="font-semibold text-white tracking-wide uppercase text-sm">Legal</h3>
              </div>
              <ul className="space-y-4">
                {data().navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} XYZ Dimensions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {data().bottomLinks.map((item) => (
              <Link key={item.label} href={item.href} className="text-neutral-500 hover:text-white text-sm transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
