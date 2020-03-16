// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import AppointmentModal from '../../components/AppointmentModal'

const props = {
  handleCloseModal: jest.fn(),
}

const wrapper = (props = {}) => {
  const component = shallow(<AppointmentModal {...props} />)

  return component
}

describe('AppointmentModal component', () => {
  const wrapperWithProps = wrapper(props)

  // Snapshot
  test('should render correctly AppointmentModal component default props', () => {
    expect(shallowToJson(wrapperWithProps)).toMatchSnapshot()
    expect(AppointmentModal.defaultProps.handleCloseModal()).toBeUndefined()
  })
})
