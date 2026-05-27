import React from 'react'
import { render, screen } from '@testing-library/react'
import ConfigProvider from '../../dist/components/config-provider/index'
import AtLoadMore from '../../dist/components/load-more/index'
import AtPagination from '../../dist/components/pagination/index'
import { enUS } from '../../dist/locale/index'

describe('ConfigProvider i18n', () => {
  it('AtLoadMore uses enUS locale from ConfigProvider', () => {
    render(
      <ConfigProvider locale={enUS}>
        <AtLoadMore status='loading' />
      </ConfigProvider>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('AtPagination uses enUS locale from ConfigProvider', () => {
    render(
      <ConfigProvider locale={enUS}>
        <AtPagination total={100} icon={false} />
      </ConfigProvider>
    )
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('component props override ConfigProvider locale', () => {
    render(
      <ConfigProvider locale={enUS}>
        <AtLoadMore status='loading' loadingText='Custom loading' />
      </ConfigProvider>
    )
    expect(screen.getByText('Custom loading')).toBeInTheDocument()
  })
})
