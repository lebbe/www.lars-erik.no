import fs from 'fs'
import type { Namespace, Languages } from '../types/i18n'

import config from '../../i18.config.json'

export function getI18nFunction(
  lang: Languages | undefined,
  namespaces: Namespace[]
) {
  // Merge all namespaces into a single object

  const translations: Record<string, Record<Languages, string>> = {}

  for (const namespace of namespaces) {
    const namespaceTranslation = JSON.parse(
      fs.readFileSync(`./src/content/i18n/${namespace}.json`, 'utf-8')
    )

    for (const key in namespaceTranslation) {
      translations[key] = translations[key] || namespaceTranslation[key]
    }
  }

  return function t(key: keyof typeof translations) {
    if (lang === config.defaultLang || lang === undefined) {
      return key // fallback
    }

    const entry = translations[key]

    if (!entry) {
      const msg = `"${key}": {"${lang}": ""},`
      if (import.meta.env.DEV) {
        console.warn(msg)
      } else {
        throw new Error(msg)
      }

      return key // fallback = norsk
    }

    const value = entry[lang]
    if (!value) {
      const msg = `[${lang}] Mangler oversettelse for "${key}"`
      if (import.meta.env.DEV) {
        console.warn(msg)
      } else {
        throw new Error(msg)
      }

      return key
    }

    return value
  }
}
