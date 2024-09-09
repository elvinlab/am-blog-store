import consts from '@/consts'
import { en } from '@/i18n/locales/en'
import { es } from '@/i18n/locales/es'
import type I18nKey from '@i18n/i18nKey'

//TODO En un futuro intentar usar algun serverless para traerse el diccionario de idiomas
export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = es

const map: { [key: string]: Translation } = {
  es,
  en,
  en_us: en,
  en_gb: en,
  en_au: en,
}
const getTranslation = (lang: string): Translation =>
  map[lang.toLowerCase()] || defaultTranslation

const i18n = (key: I18nKey): string => {
  const lang = consts.$_settings.lang || 'es'
  return getTranslation(lang)[key]
}

export { i18n as $_t }
