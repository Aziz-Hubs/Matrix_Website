export interface Service {
  _id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription?: unknown[]
  icon?: string
  features?: string[]
}

export interface Project {
  _id: string
  title: string
  slug: string
  client: string
  category: string
  description: string
  fullDescription?: unknown[]
  tags?: string[]
  metric?: string
  date?: string
  isFeatured?: boolean
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  company?: string
  quote: string
}

export interface TeamMember {
  _id: string
  name: string
  position: string
  bio?: string
  experience?: string
}

export interface Office {
  address?: string
  city?: string
  phone?: string
  email?: string
  website?: string
}

export interface SocialLinks {
  linkedin?: string
  facebook?: string
  instagram?: string
  twitter?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Settings {
  companyName: string
  tagline: string
  description?: string
  mainOffice: Office
  workingHours: string
  socialLinks: SocialLinks
  stats?: Stat[]
}

export interface HeroContent {
  headline: string
  subheadline: string
  tagline: string
  primaryCta: string
  primaryCtaLink: string
  secondaryCta: string
  secondaryCtaLink: string
  trustText: string
}

export interface HomepageContent {
  services: Service[]
  projects: Project[]
  testimonials: Testimonial[]
  settings: Settings | null
  hero: HeroContent | null
}
