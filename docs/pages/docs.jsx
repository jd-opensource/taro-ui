import React from 'react'
import classnames from 'classnames'
import { Route, Redirect, Switch } from 'react-router-dom'
import QRCode from 'qrcode.react'
import PageHeader from '../components/header'
import Sidebar from '../components/sidebar'

import navsConfig from '../nav.config.yml'
import { default as pathMap } from '../page-route'
import qrCodeImg from '../assets/qr_code.png'
import wxAppLogo from '../assets/wxapp-logo.png'
import qrCodeWxApp from '../assets/wxapp.jpg'
import '../assets/style/docs.scss'

class Docs extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      fixed: false,
      mode: 'light',
    }
  }

  componentDidMount() {
    const _mode = localStorage.getItem('mode')
    this.setState({
      mode: _mode || 'light',
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.refs.atMarkdown.scrollTo(0, 0)
    }
  }

  changeMode() {
    const { handleMode } = this.props
    const { mode } = this.state

    handleMode && handleMode()
    this.setState({
      mode: mode === 'light' ? 'dark' : 'light',
    })
  }

  render() {
    const data = navsConfig.components
    const { fixed, mode } = this.state
    const pathname = this.props.location.pathname
    const reg = /\/\S+\/(\S+)/
    const result = pathname.match(reg)
    const curDemoPath = pathMap[result[1]] || ''
    const curPageUrl = `${window.location.origin}${window.location.pathname}/h5/index.html#/pages/${curDemoPath}/index`
    const isDark = mode === 'dark'
    const darkbox = isDark ? 'darkbox' : ''

    return (
      <div className='app' id='app'>
        <PageHeader collapse themeMode handleMode={this.changeMode.bind(this)} />
        <div className={classnames('at-container row', { darkbox })}>
          <div className={classnames('at-sidebar col-sm-24 col-md-6 col-lg-4', { darkbox })}>
            <Sidebar data={data} mode={mode} />
          </div>
          <div
            ref='atMarkdown'
            className={`at-markdown col-sm-24 col-md-18 col-lg-20 ${curDemoPath ? 'at-markdown--demo' : ''
              }`}
          >
            {curDemoPath && (
              <div className='qrcode-menu' style={{ right: '420px' }}>
                <div className='qrcode-container'>
                  <img src={qrCodeImg} alt='qrcode' />
                  <div className='qrcode-modal'>
                    <h6>扫描二维码查看演示效果</h6>
                    <div className='code-image'>
                      <QRCode value={curPageUrl} size={140} />
                    </div>
                  </div>
                </div>
                <div className='wxapp-container'>
                  <img src={wxAppLogo} alt='qrcode' />
                  <div className='qrcode-modal'>
                    <h6>扫描二维码查看演示效果</h6>
                    <div className='code-image'>
                      <img
                        className='wxapp-qrcode'
                        src={qrCodeWxApp}
                        alt='wxapp'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Switch>
              {data.map(item => {
                if (item.items) {
                  return item.items.map(item => (
                    <Route
                      path={`/docs/${item.name.toLowerCase()}`}
                      component={require(`../view/${item.name}`).default}
                    />
                  ))
                }
                if (item.groups) {
                  return item.groups.map(item =>
                    item.items.map(item => (
                      <Route
                        path={`/docs/${item.name.toLowerCase()}`}
                        component={require(`../view/${item.name}`).default}
                      />
                    ))
                  )
                }
              })}
              <Redirect path='/docs/' to={{ pathname: '/docs/introduction' }} />
            </Switch>
            {curDemoPath && (
              <div
                className={fixed ? 'demo-frame fixed' : 'demo-frame'}
                id='J-demo-frame'
              >
                {curDemoPath ? (
                  <iframe
                    src={`./h5/index.html#/pages/${curDemoPath}/index`}
                    frameBorder='0'
                  ></iframe>
                ) : (
                  <iframe src='./h5/index.html' frameBorder='0'></iframe>
                )}
                <div className='iphone-frame'></div>
              </div>
            )}
          </div>
        </div>
        {/* <PageFooter></PageFooter> */}
      </div>
    )
  }
}

export default Docs