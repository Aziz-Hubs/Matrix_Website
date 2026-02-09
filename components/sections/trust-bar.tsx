import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import {
    NeomLogo,
    TBCLogo,
    KAFDLogo,
    AlBiladLogo,
    RiyadhFrontLogo,
} from "@/components/ui/logo-component";

export default function TrustBar() {
    return (
        <section className="relative w-full bg-[#080808] pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
            {/* Top/Bottom Faders for smooth transition */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080808] to-transparent z-30 pointer-events-none" />

            {/* Top Content Layer */}
            <div className="container relative z-20 mx-auto px-4">
                {/* Headline Section */}
                <div className="text-center mb-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
                        <span className="text-zinc-100 italic">Trusted by experts.</span>
                        <br />
                        <span className="text-white">Used by the leaders.</span>
                    </h2>
                    <p className="text-sm md:text-base text-zinc-500 font-medium tracking-wide">
                        Powering the Infrastructure of Tomorrow.
                    </p>
                </div>

                {/* Unified Logos Grid - Manually balanced for visual weight */}
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 items-center max-w-5xl mx-auto">
                    <LogoWrapper>
                        <AlBiladLogo className="h-7 md:h-9 w-auto text-zinc-400 group-hover:text-white transition-colors duration-500 grayscale brightness-200 opacity-60 group-hover:opacity-100" />
                    </LogoWrapper>

                    <LogoWrapper>
                        <TBCLogo className="h-14 md:h-20 w-auto text-zinc-400 group-hover:text-white transition-colors duration-500 opacity-60 group-hover:opacity-100" />
                    </LogoWrapper>

                    <LogoWrapper>
                        <NeomLogo className="h-8 md:h-10 w-auto text-zinc-400 group-hover:text-white transition-colors duration-500 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                    </LogoWrapper>

                    <LogoWrapper>
                        <KAFDLogo className="h-14 md:h-20 w-auto text-zinc-400 group-hover:text-white transition-colors duration-500 opacity-60 group-hover:opacity-100" />
                    </LogoWrapper>

                    <LogoWrapper>
                        <RiyadhFrontLogo className="h-14 md:h-20 w-auto text-zinc-400 group-hover:text-white transition-colors duration-500 grayscale brightness-200 opacity-60 group-hover:opacity-100" />
                    </LogoWrapper>
                </div>
            </div>

            {/* Glowing Horizon Base - Red Brand Color - Reduced Size */}
            <div className="relative -mt-24 h-48 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none">
                {/* Red Brand ambient glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#DC1E28,transparent_70%)] opacity-30" />

                {/* The curved horizon line */}
                <div className="absolute top-1/2 -left-1/2 aspect-[1/0.6] w-[200%] rounded-[100%] border-t border-red-600/30 bg-[#080808] shadow-[0_-20px_50px_rgba(220,30,40,0.1)]" />

                {/* Particles integrated into the horizon */}
                <div className="absolute inset-x-0 bottom-0 h-full w-full opacity-40">
                    <SparklesCore
                        id="trust-bar-sparkles"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1.2}
                        particleDensity={400}
                        className="w-full h-full [mask-image:radial-gradient(50%_50%,white,transparent_100%)]"
                        particleColor="#FFFFFF"
                    />
                </div>
            </div>
        </section>
    );
}

function LogoWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="group flex items-center justify-center w-full h-24 md:h-32 transition-all duration-500 hover:bg-white/[0.02] rounded-xl">
            {children}
        </div>
    );
}
