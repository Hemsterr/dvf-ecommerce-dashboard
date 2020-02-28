// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Component
import FittingItem from '../../components/FittingItem'

const mockProps = {
  description: 'Book an appointment to meet with our Fit Stylist virtually',
  title: 'appointment',
}

const wrapper = (props = {}) => {
  const component = shallow(<FittingItem {...props} />)

  return component
}

describe('FittingItem component', () => {
  // Snapshot
  test('should render correctly FittingItem component default props', () => {
    const component = wrapper()
    expect(shallowToJson(component)).toMatchSnapshot()
    expect(FittingItem.defaultProps.description).toEqual('')
    expect(FittingItem.defaultProps.type).toEqual('')
  })

  // Testing props
  test('should be rendered with props', () => {
    const wrapperWithProps = wrapper(mockProps)
    expect(
      wrapperWithProps.find(`.fitting-item__${mockProps.title}`).length
    ).toEqual(1)
    expect(
      wrapperWithProps.find('.fitting-item__title').props().children
    ).toEqual(mockProps.title)
    expect(
      wrapperWithProps.find('.fitting-item__description').props().children
    ).toEqual(mockProps.description)
  })
})
