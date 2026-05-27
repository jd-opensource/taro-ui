import { useContext } from 'react'
import { ConfigContext } from '../components/config-provider/context'
import { defaultLocale } from '../locale'
import { Locale } from '../locale/types'

export function useComponentLocale<K extends keyof Locale>(
  component: K
): Locale[K] {
  const { locale } = useContext(ConfigContext)
  return locale?.[component] ?? defaultLocale[component]
}
