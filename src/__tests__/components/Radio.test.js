// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Radio from '../../components/Radio'

const mockProps = {
  value: 'Color Thread',
  label: 'color thread',
  isChecked: true,
  disabled: true,
}

const wrapper = (props = {}) => {
  const component = shallow(<Radio {...props} />)

  return component
}

describe('Radio component', () => {
  const wrapperWithoutProps = wrapper()
  const wrapperWithProps = wrapper(mockProps)

  // Snapshot
  test('should render correctly Radio component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(wrapperWithoutProps.find('input').props().value).toBeFalsy()
      expect(wrapperWithoutProps.find('input').props().checked).toBeFalsy()
      expect(wrapperWithoutProps.find('input').props().disabled).toBeFalsy()
    })

    test('should is rendered with a custom Props', () => {
      expect(wrapperWithProps.find('input').props().value).toMatch(
        mockProps.value
      )
      expect(wrapperWithProps.find('input').props().checked).toBe(true)
      expect(wrapperWithProps.find('input').props().disabled).toBe(true)
      expect(wrapperWithProps.find('label').props().children).toContain(
        mockProps.label
      )
    })
  })

  // Testing events
  describe('Checking events', () => {
    test('check the on Change callback ', () => {
      const input = wrapperWithoutProps.find('input')
      input.simulate('change')
    })
  })
})
