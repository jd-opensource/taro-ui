import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Form } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtFormProps } from '../../../types/form'

function AtForm({
  customStyle = '',
  className = '',
  reportSubmit = false,
  onSubmit,
  onReset,
  children
}: AtFormProps): JSX.Element {
  const handleSubmit = (event: CommonEvent): void => {
    onSubmit && onSubmit(event)
  }

  const handleReset = (event: CommonEvent): void => {
    onReset && onReset(event)
  }

  const rootCls = classNames('at-form', className)

  return (
    <Form
      className={rootCls}
      style={customStyle}
      onSubmit={handleSubmit}
      reportSubmit={reportSubmit}
      onReset={handleReset}
    >
      {children}
    </Form>
  )
}

AtForm.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  reportSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
}

export default AtForm
