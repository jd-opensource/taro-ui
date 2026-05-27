import { ComponentClass, ReactNode } from 'react'
import { PartialLocale } from './locale'

export interface ConfigProviderProps {
  locale?: PartialLocale
  children?: ReactNode
}

declare const ConfigProvider: ComponentClass<ConfigProviderProps>

export default ConfigProvider
