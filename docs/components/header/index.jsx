import React from 'react'
import classnames from 'classnames'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { DARK_KEY_SINGLE } from '../../utils/const'
import taroUILogo from '../../assets/logo-taro.png'
import darkImg from '../../assets/dark.svg'
import lightImg from '../../assets/light.svg'
import './style.scss'

class PageHeader extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      toggle: true,
      mode: 'light',
    }
  }

  componentDidMount() {
    const _mode = localStorage.getItem('mode')
    const style = localStorage.getItem('dark-style');
    const isCurrentStyle = style && ~style.indexOf(DARK_KEY_SINGLE) && !~style.indexOf('<style')

    if (_mode) {
      this.setState({
        mode: _mode
      })

      if (_mode === 'dark' && isCurrentStyle) {
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.innerHTML = style;
        document.head.appendChild(styleTag);
      }
    }
  }
  
  toggleMenu() {
    const _toggle = this.state.toggle
    this.setState({
      toggle: !_toggle
    })
  }
  goToGuide(e) {
    e.preventDefault()
  }
  goToSource(e) {
    e.preventDefault()
  }
  handleChange() {
    const _mode = this.state.mode
    const modeVal = _mode === 'light' ? 'dark' : 'light'
    const { handleMode } = this.props
    const styles = Array.from(document.querySelectorAll('style'));
    const style = localStorage.getItem('dark-style');
    const isCurrentStyle = style && ~style.indexOf(DARK_KEY_SINGLE) && !~style.indexOf('<style')

    if (modeVal === 'light') {
      styles.forEach(style => {
        if (~style.outerHTML.indexOf(DARK_KEY_SINGLE)) {
          const newStyle = style.outerHTML.replace(/<style>/g, '').replace(/<\/style>/g, '').replace(/<style type="text\/css">/, '')
          localStorage.setItem('dark-style', newStyle)
          style.remove()
        }
      });
    }

    if (modeVal === 'dark' && isCurrentStyle) {
      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.innerHTML = style;
      document.head.appendChild(styleTag);
    }

    if (modeVal === 'dark' && !isCurrentStyle) {
      require('../../assets/style/dark.scss');
    }

    this.setState({
      mode: modeVal,
    }, () => {
      localStorage.setItem('mode', modeVal)
      handleMode && handleMode()
    })
  }

  render() {
    const { collapse, style, themeMode } = this.props
    const { toggle, mode } = this.state
    const darktheme = themeMode && mode === 'dark' && 'darktheme' // 暗黑模式bg
    const darktext = themeMode && mode === 'dark' && 'darktext' // 暗黑模式text color

    return (
      <header
        className={classnames('page-header', { collapse, darktheme })}
        style={style}
        id='J-page-header'
      >
        <div className='nav-container'>
          <div className='nav-left'>
            <div className='logo'>
              <Link to='/'>
                <img className='logo-img' src={taroUILogo} />
                <span className={classnames('', { darktext })}>Taro UI</span>
              </Link>
            </div>
            <i className='icon icon-menu nav-icon' onClick={this.toggleMenu} />
          </div>
          <div
            className='nav-right'
            style={{ height: toggle ? '0px' : '100px' }}
          >
            <ul className='navbar'>
              <li>
                <NavLink
                  className={classnames('', { darktext })}
                  activeClassName='router-link-active'
                  to='/docs/introduction'
                >
                  组件
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={classnames('', { darktext })}
                  activeClassName='router-link-active'
                  to='/docs/resource'
                >
                  设计资源
                </NavLink>
              </li>
              <li>
                <a
                  href='https://nervjs.github.io/taro-ui-theme-preview/'
                  target='__blank'
                  className={classnames('', { darktext })}
                >
                  主题生成器
                </a>
              </li>
              <li>
                <a 
                  href='https://aotu.io/' 
                  target='__blank' 
                  className={classnames('', { darktext })}
                >
                  关于我们
                </a>
              </li>
              {
                themeMode && <li>
                  <a onClick={this.handleChange.bind(this)}>
                    {
                      mode === 'light'
                        ? <img className="nav-icon" src={darkImg} />
                        : <img className="nav-icon" src={lightImg} />
                    }
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(PageHeader)
