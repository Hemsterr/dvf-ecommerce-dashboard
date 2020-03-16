// Libs
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Component
import ShippingModal from '../../components/ShippingModal'
import ERROR_MESSAGES from '../../constants/errorMessages'

const props = {
  handleCloseModal: jest.fn(),
  children: '',
  title: 'Appointments detail',
  className: 'isUpcoming',
}

const wrapper = (props = {}) => {
  const component = render(<ShippingModal {...props} />)

  return component
}

describe('ShippingModal component', () => {
  // Snapshot
  test('should render correctly ShippingModal component default props', () => {
    const { container } = wrapper(props)
    expect(container).toMatchSnapshot()
    expect(ShippingModal.defaultProps.handleCloseModal()).toBeUndefined()
  })

  test('Testing event onBlur textinput', () => {
    const { container, rerender } = wrapper(props)
    const formInput = container.querySelectorAll('input')
    expect(formInput.length).toEqual(7)

    const button = container.querySelector('.btn')
    fireEvent.click(button)
    rerender(<ShippingModal {...props} />)
    const messageError = container.querySelectorAll('.input-group__label-error')
    expect(messageError.length).toEqual(6)

    // Testing input invalid email
    fireEvent.blur(formInput[0], {
      target: { value: '0123456' },
    })
    fireEvent.click(button)
    expect(messageError[0].textContent).toEqual(ERROR_MESSAGES.EMAIL_FORMAT)

    // Testing input invalid zip code
    fireEvent.blur(formInput[6], {
      target: { value: 'zip code' },
    })
    fireEvent.click(button)
    expect(messageError[5].textContent).toEqual(
      ERROR_MESSAGES.INVALID_ZIPCODE_FORMAT
    )

    // Testing input valid value
    fireEvent.blur(formInput[0], {
      target: { value: 'join@gmai.com' },
    })

    fireEvent.blur(formInput[1], {
      target: { value: 'join' },
    })

    fireEvent.blur(formInput[2], {
      target: { value: '123 st' },
    })

    fireEvent.blur(formInput[4], {
      target: { value: 'New York' },
    })

    fireEvent.blur(formInput[5], {
      target: { value: 'NY' },
    })

    fireEvent.blur(formInput[6], {
      target: { value: '12345' },
    })

    fireEvent.click(button)
    rerender(<ShippingModal {...props} />)
    expect(
      container.querySelectorAll('.input-group__label-error').length
    ).toEqual(0)

    // Testing render contact modal
    expect(
      container.querySelectorAll('.shipping-modal__header').length
    ).toEqual(1)
  })
})
