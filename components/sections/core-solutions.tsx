import {
    Video,
    Server,
    Wifi,
    Fingerprint,
    BrainCircuit,
    Layers,
} from 'lucide-react';
import { SparklesCore } from "@/components/ui/sparkles";

const features = [
    {
        icon: <Video className="h-6 w-6" />,
        title: 'Smart Surveillance & Security',
        desc: 'Mission-critical video surveillance, intrusion detection, and perimeter defense for high-risk facilities.',
    },
    {
        icon: <Server className="h-6 w-6" />,
        title: 'Data Center Engineering',
        desc: 'Design and construction of Tier 1-4 data centers, including cooling, power, and physical security.',
    },
    {
        icon: <Wifi className="h-6 w-6" />,
        title: 'Enterprise Networking',
        desc: 'High-speed fiber optics, structured cabling, and secure wireless networks (Wi-Fi 6/7) for campus-wide connectivity.',
    },
    {
        icon: <Fingerprint className="h-6 w-6" />,
        title: 'Access Control Systems',
        desc: 'Advanced biometrics, ANPR (license plate recognition), and unified access management for secure environments.',
    },
    {
        icon: <BrainCircuit className="h-6 w-6" />,
        title: 'AI & Data Analytics',
        desc: 'Transforming raw video and sensor data into actionable insights using AI-driven threat detection and business intelligence.',
    },
    {
        icon: <Layers className="h-6 w-6" />,
        title: 'Master Data Management',
        desc: 'Centralized data platforms that ensure data integrity, availability, and security across the entire enterprise.',
    },
];

export default function CoreSolutions() {
    return (
        <section className="relative py-12 px-4 md:px-8 bg-black overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="relative mx-auto max-w-2xl text-center mb-12">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                            End-to-End Capabilities
                        </h2>
                        <p className="mt-4 text-lg text-neutral-400">
                            From physical cables to cognitive AI, we provide the complete technology stack.
                        </p>
                    </div>
                    <div
                        className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] opacity-20"
                        style={{
                            background:
                                'linear-gradient(152.92deg, rgba(220, 30, 40, 0.2) 4.54%, rgba(220, 30, 40, 0.26) 34.2%, rgba(220, 30, 40, 0.1) 77.55%)',
                        }}
                    ></div>
                </div>

                <hr className="bg-neutral-800 mx-auto mb-10 h-px w-1/2 border-0 relative z-20" />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="group transform-gpu space-y-4 rounded-xl border border-white/10 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-neutral-900/60 [box-shadow:0_-20px_80px_-20px_#dc1e2810_inset] hover:[box-shadow:0_-20px_80px_-20px_#dc1e2825_inset]"
                        >
                            <div className="text-red-500 w-fit transform-gpu rounded-full border border-red-500/20 bg-red-950/20 p-3 transition-all duration-300 [box-shadow:0_-10px_40px_-10px_#dc1e2815_inset] group-hover:[box-shadow:0_-10px_40px_-10px_#dc1e2830_inset]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-100 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Horizon Glow - Positioned below cards */}
                <div className="absolute -bottom-40 left-0 w-full h-80 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#DC1E28,transparent_70%)] opacity-40" />
                    <div className="absolute top-1/2 -left-1/2 aspect-[1/0.6] w-[200%] rounded-[100%] border-t border-red-600/30 bg-transparent shadow-[0_-20px_50px_rgba(220,30,40,0.15)]" />
                    <div className="absolute inset-x-0 bottom-0 h-full w-full opacity-50">
                        <SparklesCore
                            id="core-solutions-sparkles-bottom"
                            background="transparent"
                            minSize={0.4}
                            maxSize={1.2}
                            particleDensity={400}
                            className="w-full h-full [mask-image:radial-gradient(50%_50%,white,transparent_100%)]"
                            particleColor="#FFFFFF"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
