/**
 * XYZ Dimensions Site Configuration
 * Central configuration for site-wide constants
 */

export const siteConfig = {
    name: "XYZ Dimensions",
    description:
        "XYZ Dimensions designs, builds, and implements complex technology ecosystems for governments, smart cities, and enterprises across Saudi Arabia and beyond.",
    url: "https://e-xyzd.com",
    ogImage: "https://e-xyzd.com/og.jpg",
    links: {
        linkedin: "https://linkedin.com/company/xyz-dimensions",
        twitter: "https://twitter.com/xyzdimensions",
    },
    contact: {
        email: "info@e-xyzd.com",
        phone: "+966-XXX-XXX-XXXX",
        address: {
            street: "",
            city: "Riyadh",
            country: "Saudi Arabia",
        },
    },
    keywords: [
        "technology ecosystems",
        "smart cities",
        "digital transformation",
        "Saudi Arabia IT",
        "enterprise solutions",
        "government technology",
        "infrastructure integration",
        "systems architecture",
    ],
} as const;

export type SiteConfig = typeof siteConfig;
