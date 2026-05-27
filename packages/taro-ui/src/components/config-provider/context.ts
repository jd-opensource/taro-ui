import { createContext, useContext } from 'react'
import { defaultLocale } from '../../locale'
import { Locale } from '../../locale/types'

export interface ConfigContextValue {
  locale: Locale
}

export const ConfigContext = createContext<ConfigContextValue>({
  locale: defaultLocale
})

export function useConfig() {
  return useContext(ConfigContext)
}
