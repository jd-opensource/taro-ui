import classNames from 'classnames'
import React from 'react'
import { ScrollView } from '@tarojs/components'
import { AtModalContentProps } from '../../../../types/modal'

function AtModalContent({
  className,
  children
}: AtModalContentProps): JSX.Element {
  const rootClass = classNames('at-modal__content', className)
  return (
    <ScrollView scrollY className={rootClass}>
      {children}
    </ScrollView>
  )
}

export default AtModalContent
