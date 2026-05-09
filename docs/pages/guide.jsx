import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PageHeader from '../components/header'
import Sidebar from '../components/sidebar'

import navsConfig from '../nav.config.yml'

class Guide extends React.Component {
  componentDidMount() {}
  render() {
    const data = navsConfig.guide

    return (
      <div className='app' id='app'>
        <PageHeader collapse />
        <div className='at-container row'>
          <div className='at-sidebar col-sm-24 col-md-6 col-lg-4'>
            <Sidebar data={data} />
          </div>
          <div
            className=' col-sm-24 col-md-18 col-lg-20 '
            style={{ padding: 0 }}
          >
            <div className='at-markdown'>
              <Switch>
                {data.map(item => {
                  if (item.items) {
                    return item.items.map(item => (
                      <Route
                        path={`/guide/${item.name.toLowerCase()}`}
                        component={require(`../view/${item.name}`).default}
                      />
                    ))
                  }
                  if (item.groups) {
                    return item.groups.map(item =>
                      item.items.map(item => (
                        <Route
                          path={`/guide/${item.name.toLowerCase()}`}
                          component={require(`../view/${item.name}`).default}
                        />
                      ))
                    )
                  }
                })}
                <Redirect path='/guide/' to={{ pathname: '/guide/color' }} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Guide
