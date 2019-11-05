// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Indicator from '../../components/Indicator'

describe('Indicator component', () => {
  const wrapper = shallow(<Indicator />)

  // Snapshot
  test('should render correctly Indicator component', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
