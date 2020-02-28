// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Component
import BookingItem from '../../components/BookingItem'

const mockProps = {
  description: "I would like to fit myself using Hemster's Fitting Kit",
  type: 'fit-stylist',
  handleSelectOption: jest.fn(),
}

const wrapper = (props = {}) => {
  const component = shallow(<BookingItem {...props} />)

  return component
}

describe('BookingItem component', () => {
  // Snapshot
  test('should render correctly BookingItem component default props', () => {
    const component = wrapper()
    expect(shallowToJson(component)).toMatchSnapshot()
    expect(BookingItem.defaultProps.description).toEqual('')
    expect(BookingItem.defaultProps.type).toEqual('fitting-kit')
    expect(BookingItem.defaultProps.handleSelectOption()).toBeUndefined()
  })

  // Testing props
  test('should be rendered with props', () => {
    const wrapperWithProps = wrapper(mockProps)
    expect(wrapperWithProps.find('.bookingItem__fit-stylist').length).toEqual(1)
    expect(
      wrapperWithProps.find('.bookingItem__title').props().children
    ).toEqual(mockProps.description)
  })

  test('should be rendered with small component', () => {
    const wrapperWithProps = wrapper({ ...mockProps, isSmall: true })
    expect(wrapperWithProps.find('.bookingItem__small').length).toEqual(1)
  })
})
