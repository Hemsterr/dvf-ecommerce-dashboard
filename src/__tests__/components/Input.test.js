// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Input from '../../components/Input'

// Constants
import keycodes from '../../constants/keyCodes'

const mockBlurFunc = jest.fn()
const mockKeyDownFunc = jest.fn()
const mockProps = {
  type: 'text',
  label: 'User Name',
  defaultValue: 'Robert Downey Jr',
  placeholder: 'Enter on textbox, please!',
  errorMessage: 'You entered format wrong for User Name field',
  handleOnBlur: mockBlurFunc,
  handleOnKeyDown: mockKeyDownFunc,
  className: 'userName',
}

const wrapper = (props = {}) => {
  const component = shallow(<Input {...props} />)

  return component
}

describe('Input component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Input component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(wrapperWithoutProps.find('input').props().defaultValue).toBeFalsy()
      expect(Input.defaultProps.handleOnBlur()).toBeUndefined()
      expect(Input.defaultProps.handleOnKeyDown()).toBeUndefined()
    })

    test('should is rendered with a custom Props', () => {
      const wrapperWithProps = wrapper(mockProps)

      // Expected with a placeholder
      expect(wrapperWithProps.find('input').props().placeholder).toMatch(
        mockProps.placeholder
      )

      // Expected with a defaultValue
      expect(wrapperWithProps.find('input').props().value).toMatch(
        mockProps.defaultValue
      )

      // Expected with a className
      expect(wrapperWithProps.find('.input-group').props().className).toMatch(
        mockProps.className
      )

      // Expected have a label
      expect(wrapperWithProps.find('label').props().children).toMatch(
        mockProps.label
      )

      // Expected have not label
      expect(wrapperWithoutProps.find('label')).toHaveLength(0)

      expect(wrapperWithoutProps.find('.userName')).toHaveLength(0)

      // Expected with a error message
      expect(
        wrapperWithProps.find('.input-group__label-error').props().children
      ).toMatch(mockProps.errorMessage)

      // Expected don't appear a error message
      expect(wrapperWithoutProps.find('.input-group__error')).toHaveLength(0)

      // Expected have contain class to change border color when input appear error
      expect(
        wrapperWithProps.find('input').hasClass('input-group__text--error')
      ).toEqual(true)

      // Expected don't contain class to change border color when input's not appear error
      expect(
        wrapperWithoutProps.find('input').hasClass('input-group__text--error')
      ).toEqual(false)
    })
  })

  describe('Handle with isPrimary props', () => {
    const InputComponent = wrapper({ ...mockProps, isBorder: true })
    expect(InputComponent.find('.input-group__border')).toHaveLength(1)
  })

  // Testing events
  describe('Checking events', () => {
    test('check the on Blur callback ', () => {
      const InputComponent = wrapper(mockProps)

      const input = InputComponent.find('input')
      const value = 'John Hart'
      const name = 'userName'

      input.simulate('blur', {
        target: { value, name },
      })
      expect(mockBlurFunc).toHaveBeenCalledWith(value, name)
      expect(InputComponent.find('.input-group__without-border')).toHaveLength(
        1
      )
      expect(InputComponent.find('.userName')).toHaveLength(1)
    })

    test('check the on Enter Press callback ', () => {
      const InputComponent = wrapper(mockProps)

      const input = InputComponent.find('input')
      const value = 'John Hart J'

      input.simulate('keydown', {
        keyCode: keycodes.KEY_ENTER,
        target: { value },
      })

      expect(mockKeyDownFunc).toHaveBeenCalledTimes(1)
    })

    test('check the on Change callback ', () => {
      const input = wrapperWithoutProps.find('input')
      const value = 'John Hart Jr'

      input.simulate('change', {
        target: { value },
      })

      expect(wrapperWithoutProps.find('input').props().value).toEqual(value)
    })
  })
})
