import 'react-native'
import '@tarojs/components'

declare module 'react-native' {
  interface ViewProps {
    className?: string
  }
}

declare module '@tarojs/components' {
  interface ViewProps {
    onLayout?: (event: any) => void
  }

  interface InputProps {
    onLayout?: (event: any) => void
  }

  interface TextProps {
    className?: string
  }
}
