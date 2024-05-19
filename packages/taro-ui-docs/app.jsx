import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'at-ui-style'

import Index from './pages/index.jsx'
import Docs from './pages/docs.jsx'
import Guide from './pages/guide.jsx'

class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      visible: false,
      mode: 'light'
    }
  }
  componentDidMount() {
    const _mode = localStorage.getItem('mode')
    this.setState({
      visible: true,
      mode: _mode || 'light'
    })
  }

  shouldComponentUpdate() {
    return true
  }

  handleMode() {
    const _mode = this.state.mode
    const modeVal = _mode === 'light' ? 'dark' : 'light'
    this.setState(
      {
        mode: modeVal
      },
      () => {
        localStorage.setItem('mode', modeVal)
      }
    )
  }

  render() {
    const { mode } = this.state

    return (
      <div
        className='wrapper'
        style={{ backgroundColor: mode === 'light' ? '#F8FAFF' : '#434242' }}
      >
        <Switch>
          <Route path='/' exact component={Index} />
          <Route
            path='/docs'
            render={props => (
              <Docs {...props} handleMode={this.handleMode.bind(this)} />
            )}
          />
          <Route path='/guide' component={Guide} />
        </Switch>
      </div>
    )
  }
}
const container = document.getElementById('container')
const root = createRoot(container)
root.render(
  <Router>
    <App />
  </Router>
)
