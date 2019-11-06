// Libs
import React from 'react'
import { render } from '@testing-library/react'

// Component
import AlterationSelected from '../../components/AlterationSelected'

const mockProps = {
  alterations: [
    {
      label: 'Shorten Sleeves',
      isChecked: true,
      price: 10,
    },
    {
      label: 'Taper Waist',
      isChecked: false,
      price: 60,
    },
  ],
}

const wrapper = (props = {}) => {
  const component = render(<AlterationSelected {...props} />)

  return component
}

describe('AlterationSelected component', () => {
  // Snapshot
  test('should render correctly AlterationSelected component default props', () => {
    const { container } = wrapper()
    expect(container).toMatchSnapshot()
    expect(AlterationSelected.defaultProps.alterations.length).toEqual(0)
  })

  // Testing props
  test('should be rendered with props', () => {
    const { container } = wrapper(mockProps)
    expect(container.querySelectorAll('.alteration__item').length).toEqual(
      mockProps.alterations.length
    )
  })
})
