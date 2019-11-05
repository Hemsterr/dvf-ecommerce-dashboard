// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import AlterationItem from '../../components/AlterationItem'

const mockProps = {
  alteration: 'Ciara Satin Crepe Pants',
}

const wrapper = (props = {}) => {
  const component = shallow(<AlterationItem {...props} />)

  return component
}

describe('AlterationItem component', () => {
  // Snapshot
  test('should render correctly AlterationItem component default props', () => {
    const wrapperWithoutProps = wrapper()
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
    expect(AlterationItem.defaultProps.alteration).toEqual('')
  })

  // Testing props
  test('should be rendered with props', () => {
    const wrapperWithProps = wrapper(mockProps)
    expect(shallowToJson(wrapperWithProps)).toMatchSnapshot()
    expect(
      wrapperWithProps
        .find('p')
        .last()
        .props().children
    ).toMatch(mockProps.alteration)
  })
})
