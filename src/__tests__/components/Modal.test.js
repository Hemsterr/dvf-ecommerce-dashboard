// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Modal from '../../components/Modal'

const props = {
  handleCloseModal: jest.fn(),
  children: '',
  title: 'Appointments detail',
  className: 'isUpcoming',
}

const wrapper = (props = {}) => {
  const component = shallow(<Modal {...props} />)

  return component
}

describe('Modal component', () => {
  const wrapperWithProps = wrapper(props)

  // Snapshot
  test('should render correctly Modal component default props', () => {
    expect(shallowToJson(wrapperWithProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should be rendered default props', () => {
      expect(wrapperWithProps.find('p').length).toBe(1)
    })

    test('should be rendered title modal', () => {
      expect(wrapperWithProps.find('p').props().children).toEqual(
        'Appointments detail'
      )
    })
  })
})
