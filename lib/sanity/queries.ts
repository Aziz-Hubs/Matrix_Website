import { groq } from 'next-sanity'
import { client } from './client'

// Services query - with bilingual fields (using English as default)
// Only keeps services with bilingual title format (object with en/ar keys)
export const servicesQuery = groq`
  *[_type == "service" && isActive == true && defined(title.en)] | order(order asc) {
    _id,
    "title": coalesce(title.en, title),
    "slug": slug.current,
    "shortDescription": coalesce(shortDescription.en, shortDescription),
    "description": coalesce(description.en, description),
    icon,
    "features": features,
    "featuresAr": featuresAr
  }
`

// Single service query - with bilingual fields
// Uses coalesce to handle both old (plain string) and new (bilingual object) formats
export const serviceQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    "title": coalesce(title.en, title),
    "titleAr": coalesce(title.ar, title),
    "slug": slug.current,
    "shortDescription": coalesce(shortDescription.en, shortDescription),
    "description": coalesce(description.en, description),
    fullDescription,
    fullDescriptionAr,
    icon,
    offerings
  }
`

// All projects query - with bilingual fields
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    "title": title.en,
    "titleAr": title.ar,
    "slug": slug.current,
    "client": client.en,
    category,
    "description": description.en,
    "image": image.asset->url,
    "tags": tags,
    "tagsAr": tagsAr,
    metric,
    date
  }
`

// Featured projects query - with bilingual fields
export const featuredProjectsQuery = groq`
  *[_type == "project" && isFeatured == true] | order(order asc) {
    _id,
    "title": title.en,
    "titleAr": title.ar,
    "slug": slug.current,
    "client": client.en,
    category,
    "description": description.en,
    "image": image.asset->url,
    "tags": tags,
    "tagsAr": tagsAr,
    metric,
    date
  }
`

// Single project query - with bilingual fields
export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "title": title.en,
    "titleAr": title.ar,
    "slug": slug.current,
    "client": client.en,
    category,
    "description": description.en,
    "image": image.asset->url,
    fullDescription,
    fullDescriptionAr,
    "tags": tags,
    "tagsAr": tagsAr,
    metric,
    date
  }
`

// Testimonials query - with bilingual fields
export const testimonialsQuery = groq`
  *[_type == "testimonial" && isActive == true] {
    _id,
    name,
    "role": role,
    "roleAr": roleAr,
    "company": company,
    "companyAr": companyAr,
    "quote": quote,
    "quoteAr": quoteAr
  }
`

// Team members query
export const teamQuery = groq`
  *[_type == "teamMember" && isActive == true] | order(order asc) {
    _id,
    name,
    position,
    bio,
    experience
  }
`

// Settings query - with bilingual fields
export const settingsQuery = groq`
  *[_type == "settings"][0] {
    "companyName": companyName.en,
    "companyNameAr": companyName.ar,
    "tagline": tagline.en,
    "taglineAr": tagline.ar,
    "description": description.en,
    "descriptionAr": description.ar,
    mainOffice,
    saudiOffice,
    "workingHours": workingHours.en,
    "workingHoursAr": workingHours.ar,
    socialLinks,
    stats
  }
`

// Hero query - with bilingual fields
export const heroQuery = groq`
  *[_type == "hero"][0] {
    "headline": headline.en,
    "headlineAr": headline.ar,
    "subheadline": subheadline.en,
    "subheadlineAr": subheadline.ar,
    "tagline": tagline.en,
    "taglineAr": tagline.ar,
    "primaryCta": primaryCta.en,
    "primaryCtaAr": primaryCta.ar,
    primaryCtaLink,
    "secondaryCta": secondaryCta.en,
    "secondaryCtaAr": secondaryCta.ar,
    secondaryCtaLink,
    "trustText": trustText.en,
    "trustTextAr": trustText.ar
  }
`

// Homepage content fetcher
export async function getHomepageContent() {
  const [services, projects, testimonials, settings, hero] = await Promise.all([
    client.fetch(servicesQuery),
    client.fetch(featuredProjectsQuery),
    client.fetch(testimonialsQuery),
    client.fetch(settingsQuery),
    client.fetch(heroQuery),
  ])
  return { services, projects, testimonials, settings, hero }
}
