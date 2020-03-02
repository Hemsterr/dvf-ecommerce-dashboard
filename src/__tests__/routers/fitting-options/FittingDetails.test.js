// Libs
import React from 'react'
import { render } from '@testing-library/react'

// Component
import FittingDetails from '../../../routers/fitting-options/FittingDetails'

const wrapper = (props = {}) => render(<FittingDetails {...props} />)

describe('FittingDetails component', () => {
  test('Render the FittingDetails component with default props', () => {
    const wrapperWithoutProps = wrapper()
    expect(wrapperWithoutProps.container).toMatchSnapshot()
    expect(FittingDetails.defaultProps.fittingOption).toEqual('fitting-kit')
    expect(FittingDetails.defaultProps.handleSelectOption()).toBeUndefined()
  })
})
