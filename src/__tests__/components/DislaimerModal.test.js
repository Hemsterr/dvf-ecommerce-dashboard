// Libs
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Component
import DisclaimerModal from '../../components/DisclaimerModal'

const props = {
  handleCloseModal: jest.fn(),
  handleAcceptDisclaimer: jest.fn(),
}

const wrapper = (props = {}) => {
  const component = render(<DisclaimerModal {...props} />)

  return component
}

describe('DisclaimerModal component', () => {
  // Snapshot
  test('should render correctly DisclaimerModal component default props', () => {
    const { container } = wrapper(props)
    expect(container).toMatchSnapshot()
    expect(DisclaimerModal.defaultProps.handleCloseModal()).toBeUndefined()
    expect(
      DisclaimerModal.defaultProps.handleAcceptDisclaimer()
    ).toBeUndefined()
  })

  test('Render the button with props', () => {
    const { container, rerender } = wrapper(props)

    // Checking event click button
    const buttons = container.querySelectorAll('.btn')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    rerender(<DisclaimerModal {...props} />)
    expect(props.handleCloseModal).toBeTruthy()
    expect(props.handleAcceptDisclaimer).toBeTruthy()
  })
})
