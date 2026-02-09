import Link from "next/link";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
    ],
    solutions: [
        { name: "Smart Cities", href: "/solutions/smart-cities" },
        { name: "Enterprise Systems", href: "/solutions/enterprise-systems" },
        { name: "Government Platforms", href: "/solutions/government-platforms" },
        { name: "Digital Transformation", href: "/solutions/digital-transformation" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
    ],
    social: [
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-label="Site Footer">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="text-2xl font-bold">
                            XYZ Dimensions
                        </Link>
                        <p className="mt-4 text-sm text-gray-400">
                            Designing, building, and implementing complex technology
                            ecosystems for governments, smart cities, and enterprises.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Solutions
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.solutions.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-xs text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} XYZ Dimensions. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
