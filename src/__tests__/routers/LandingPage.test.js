// Libs
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Component
import LadingPage from '../../routers/landing-page'

// Constants
import keycodes from '../../constants/keyCodes'

const wrapper = (props = {}) => {
  const component = render(
    <Router>
      <LadingPage {...props} />
    </Router>
  )
  return component
}

describe('LadingPage component', () => {
  test('Render the LadingPage component with default props', () => {
    const wrapperWithoutProps = wrapper()
    expect(wrapperWithoutProps.container).toMatchSnapshot()
  })

  test('Testing event onBlur textinput', () => {
    const wrapperWithProps = wrapper()
    const { container, rerender } = wrapperWithProps

    // Checking event onBlur User name
    const formInput = container.querySelectorAll('input')
    expect(formInput.length).toEqual(2)

    const button = container.querySelector('.btn')
    fireEvent.click(button)
    rerender(
      <Router>
        <LadingPage />
      </Router>
    )
    const messageError = container.querySelectorAll('.input-group__label-error')
    expect(messageError.length).toEqual(2)
  })

  test('Testing render message error', () => {
    const wrapperWithProps = wrapper()
    const { container, rerender } = wrapperWithProps

    // Input form
    const formInput = container.querySelectorAll('input')
    const messageError = container.querySelectorAll('.input-group__label-error')
    const button = container.querySelector('.btn')
    fireEvent.blur(formInput[0], {
      target: { value: '0123456' },
    })

    fireEvent.click(button)

    // Handle event key down
    fireEvent.keyDown(formInput[1], {
      keyCode: keycodes.KEY_ENTER,
      target: { value: 'join@gmail.com' },
    })

    rerender(
      <Router>
        <LadingPage />
      </Router>
    )
    expect(messageError.length).toEqual(0)
  })
})
