import React from 'react'
import ICONS from './icons.js'
import './style.scss'

class IconList extends React.Component {
  render() {
    const { type = 'main' } = this.props
    const iconlist = ICONS[type]

    return (
      <ul className='at-iconlist row'>
        {iconlist.map((icon, index) => (
          <li
            className='at-iconlist__item col-sm-6 col-md-4 col-lg-3 flex flex-middle flex-center'
            key={`icon-list-${index}`}
          >
            <div className=''>
              <i className={`at-icon at-icon-${icon}`}></i>
              <p>{icon}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default IconList
