import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {
  configure, shallow, mount, render
} from 'enzyme'

configure({ adapter: new Adapter() })

// eslint-disable-next-line no-console
console.error = message => message

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount

window.matchMedia = window.matchMedia
  || function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  }
