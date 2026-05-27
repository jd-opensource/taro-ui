import merge from 'lodash/merge'
import React, { useMemo } from 'react'
import { defaultLocale } from '../../locale'
import { PartialLocale } from '../../locale/types'
import { ConfigContext } from './context'

export interface ConfigProviderProps {
  locale?: PartialLocale
  children?: React.ReactNode
}

export default function ConfigProvider({
  locale,
  children
}: ConfigProviderProps): JSX.Element {
  const mergedLocale = useMemo(() => merge({}, defaultLocale, locale), [locale])

  return (
    <ConfigContext.Provider value={{ locale: mergedLocale }}>
      {children}
    </ConfigContext.Provider>
  )
}
