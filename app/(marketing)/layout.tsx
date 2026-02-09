import type { Metadata } from "next";
import { Header } from "@/components/layout";
import FooterStandard from "@/components/mvpblocks/footer-standard";

export const metadata: Metadata = {
    title: {
        template: "%s | XYZ Dimensions",
        default: "XYZ Dimensions - Technology Ecosystem Partners",
    },
    description:
        "XYZ Dimensions designs, builds, and implements complex technology ecosystems for governments, smart cities, and enterprises across Saudi Arabia and beyond.",
    keywords: [
        "technology ecosystems",
        "smart cities",
        "digital transformation",
        "Saudi Arabia IT",
        "enterprise solutions",
        "government technology",
    ],
    authors: [{ name: "XYZ Dimensions" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://e-xyzd.com",
        siteName: "XYZ Dimensions",
    },
};

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <FooterStandard />
        </>
    );
}
