// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Component
import FittingWorks from '../../components/FittingWorks'

const mockProps = {
  title: 'How our Self Service Fitting works',
  options: [
    {
      title: 'fitting',
      description:
        'Our Fit Stylist will meet with you virtually to assist you with fitting your garments',
    },
    {
      title: 'ship',
      description:
        'Ship your garments to us with the prepaid shipping label your Fit Stylist will send via email',
    },
    {
      title: 'deliver',
      description: 'Your finished garments are shipped back to you',
    },
  ],
  handleOnClick: jest.fn(),
}

const wrapper = (props = {}) => {
  const component = shallow(<FittingWorks {...props} />)

  return component
}

describe('FittingWorks component', () => {
  // Snapshot
  test('should render correctly FittingWorks component default props', () => {
    const component = wrapper(mockProps)
    expect(shallowToJson(component)).toMatchSnapshot()
    expect(FittingWorks.defaultProps.title).toEqual('')
    expect(FittingWorks.defaultProps.options).toEqual([])
    expect(FittingWorks.defaultProps.handleOnClick()).toBeUndefined()
  })

  // Testing props
  test('should be rendered with props', () => {
    const wrapperWithProps = wrapper(mockProps)
    expect(wrapperWithProps.find('FittingItem').length).toEqual(
      mockProps.options.length
    )
    expect(
      wrapperWithProps.find('.fitting-works__title').props().children
    ).toEqual(mockProps.title)
  })
})
