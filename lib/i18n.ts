/**
 * Language utilities for bilingual content
 */

export type Locale = 'en' | 'ar'

/**
 * Get a bilingual field value based on current locale
 */
export function getBilingualValue<T>(
  field: { en?: T; ar?: T } | undefined,
  locale: Locale = 'en'
): T | undefined {
  if (!field) return undefined
  return field[locale] ?? field.en ?? field.ar
}

/**
 * Get a bilingual string value with fallback
 */
export function getBilingualString(
  field: { en?: string; ar?: string } | undefined,
  locale: Locale = 'en',
  fallback: string = ''
): string {
  if (!field) return fallback
  return field[locale] ?? field.en ?? field.ar ?? fallback
}

/**
 * Get array in current language (for features, tags, etc.)
 */
export function getBilingualArray(
  field: string[] | undefined,
  fieldAr: string[] | undefined,
  locale: Locale = 'ar'
): string[] {
  if (locale === 'ar' && fieldAr) return fieldAr
  return field ?? []
}

/**
 * Get office address in current language
 */
export interface OfficeAddress {
  en?: string
  ar?: string
  city?: { en?: string; ar?: string }
}

export function getOfficeInfo(
  office: {
    address?: { en?: string; ar?: string }
    city?: { en?: string; ar?: string }
    phone?: string
    fax?: string
    email?: string
    website?: string
  } | undefined,
  locale: Locale = 'en'
) {
  if (!office) return null

  return {
    address: locale === 'ar' ? office.address?.ar : office.address?.en,
    city: locale === 'ar' ? office.city?.ar : office.city?.en,
    phone: office.phone,
    fax: office.fax,
    email: office.email,
    website: office.website,
  }
}
