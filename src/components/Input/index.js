// @flow
import React from 'react'
import ReactTooltip from 'react-tooltip'

// Constants
import keycodes from '../../constants/keyCodes'

type Props = {
  type: string,
  label: string,
  defaultValue: string,
  placeholder: string,
  errorMessage: string,
  id: string,
  keyDown: number,
  handleOnBlur: Function,
  handleOnKeyDown: Function,
  isBorder: boolean,
  className: string,
  name?: string,
  disabled?: boolean,
  isMeasurement?: boolean,
  tooltipPlace: string,
}

type State = {
  valueInput: string,
}

class Input extends React.PureComponent<Props, State> {
  static defaultProps = {
    type: 'text',
    label: '',
    defaultValue: '',
    placeholder: '',
    errorMessage: '',
    tooltipPlace: 'right',
    id: '',
    keyDown: keycodes.KEY_ENTER,
    handleOnBlur: () => {},
    handleOnKeyDown: () => {},
    isBorder: false,
    className: '',
    disabled: false,
    isMeasurement: false,
  }

  constructor(props: Props) {
    super(props)
    const { defaultValue } = this.props

    this.state = {
      valueInput: defaultValue,
    }
  }

  // handle event on enter
  handleKeyDown = (event: Object) => {
    const { keyCode, target } = event
    const valueFromKeyDown = target.value
    const { handleOnKeyDown, keyDown } = this.props

    if (keyCode === keyDown) {
      handleOnKeyDown(valueFromKeyDown)
    }
  }

  handleOnChange = (event: Object) => {
    this.setState({ valueInput: event.target.value })
  }

  render() {
    const {
      type,
      label,
      placeholder,
      errorMessage,
      isBorder,
      className,
      name,
      handleOnBlur,
      disabled,
      isMeasurement,
      id,
      tooltipPlace,
    } = this.props

    const { valueInput } = this.state
    const classError = errorMessage ? 'input-group__border--error' : ''

    return (
      <div className={`${className} input-group`}>
        {label && <label className="input-group__label">{label}</label>}
        <div>
          <input
            type={type}
            className={`input-group__text ${classError} ${
              isBorder ? 'input-group__border' : 'input-group__without-border'
            }`}
            value={valueInput}
            name={name}
            placeholder={placeholder}
            onChange={event => this.handleOnChange(event)}
            onBlur={event => handleOnBlur(event.target.value.trim(), event.target.name)}
            onKeyDown={this.handleKeyDown}
            disabled={disabled}
          />
          {errorMessage && (
            <i className="input-group__label-error">{errorMessage}</i>
          )}
        </div>
        {isMeasurement && (
          <>
            <span
              data-tip
              data-for={`tooltip-guide${id}`}
              className="input-group__tooltip"
            />
            <ReactTooltip
              delayHide={1000}
              clickable
              effect="solid"
              type="light"
              place={tooltipPlace}
              id={`tooltip-guide${id}`}
              border
            >
              <div className="landing__tooltip">
                <p>
                  need help?{' '}
                  <a
                    className="landing__tooltip-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hemster.co/how-to-fit"
                  >
                    How to measure guide
                  </a>
                </p>
              </div>
            </ReactTooltip>
          </>
        )}
      </div>
    )
  }
}

export default Input
