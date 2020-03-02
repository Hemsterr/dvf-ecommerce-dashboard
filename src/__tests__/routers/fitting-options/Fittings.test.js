// Libs
import React from 'react'
import { render } from '@testing-library/react'

// Component
import Fittings from '../../../routers/fitting-options/Fittings'

const wrapper = (props = {}) => render(<Fittings {...props} />)

describe('Fittings component', () => {
  test('Render the Fittings component with default props', () => {
    const { container } = wrapper()
    expect(container).toMatchSnapshot()
    expect(Fittings.defaultProps.handleSelectOption()).toBeUndefined()
    expect(container.querySelectorAll('.bookingItem').length).toEqual(3)
  })
})
