import type { Metadata } from "next";
import AppHero from "@/components/mvpblocks/app-hero";
import TrustBar from "@/components/sections/trust-bar";
import EngineeringStandard from "@/components/sections/engineering-standard";
import CoreSolutions from "@/components/sections/core-solutions";
import FeaturedProjects from "@/components/sections/featured-projects";
import Testimonials from "@/components/mvpblocks/testimonials-marquee";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import { PageBackground } from "@/components/ui/page-background";

export const metadata: Metadata = {
    title: "Home | XYZ Dimensions",
    description:
        "XYZ Dimensions is a Saudi IT company that designs, builds, and implements complex technology ecosystems for governments, smart cities, and enterprises.",
};

export default function HomePage() {
    return (
        <PageBackground>
            {/* Hero Section */}
            <AppHero />

            {/* Trust Bar (Social Proof) */}
            <TrustBar />

            {/* Services Overview Section - Engineering Standard */}
            <div id="services"> {/* Wrapped in div to ensure proper id targeting if section inside changes */}
                <EngineeringStandard />
            </div>

            {/* Why Choose Us Section - Core Solutions */}
            <div id="why-us">
                <CoreSolutions />
            </div>

            {/* Featured Projects Section */}
            <div id="projects">
                <FeaturedProjects />
            </div>

            {/* Testimonials Section */}
            <section id="testimonials" aria-label="Client Testimonials" className="relative z-10">
                <Testimonials />
            </section>

            {/* Contact Us Section */}
            <section id="contact" aria-label="Contact Us" className="relative z-10">
                <ContactUs1 />
            </section>
        </PageBackground>
    );
}
