// Libs
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Component
import Button from '../../components/Button'

const props = {
  label: 'Search',
  handleOnClick: jest.fn(),
  className: 'btn btn__basic',
}

describe('Button component', () => {
  test('Render the button without props', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
    expect(container.querySelectorAll('.btn__medium').length).toEqual(1)
    expect(Button.defaultProps.handleOnClick()).toBeUndefined()
  })

  test('Render the button with props', () => {
    const { container, rerender } = render(<Button {...props} />)

    // Checking event click button
    fireEvent.click(container)
    rerender(<Button {...props} />)
    expect(props.handleOnClick).toBeTruthy()
    expect(container.textContent).toEqual(props.label)
  })
})
