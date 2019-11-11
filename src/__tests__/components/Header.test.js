// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Component
import Header from '../../components/Header'

const mockProps = {
  primary: true,
}

const wrapper = (props = {}) => {
  const component = shallow(<Header {...props} />)

  return component
}

describe('Header component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Header component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
    expect(Header.defaultProps.primary).toBeFalsy()
  })

  // Testing props
  test('should be rendered default props', () => {
    expect(
      wrapperWithoutProps
        .find('img')
        .first()
        .props().src
    ).toBeTruthy()
    expect(wrapperWithoutProps.find('.main-header__link').length).toBe(0)
  })

  test('should be rendered with props', () => {
    const { container } = render(
      <Router>
        <Header {...mockProps} />
      </Router>
    )
    expect(container.querySelectorAll('.main-header__link').length).toEqual(1)
  })
})
