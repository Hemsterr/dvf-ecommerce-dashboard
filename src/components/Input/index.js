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
  keyDown: number,
  handleOnBlur: Function,
  handleOnKeyDown: Function,
  isBorder: boolean,
  className: string,
  name?: string,
  disabled?: boolean,
  isMeasurement?: boolean,
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
    } = this.props
    const { valueInput } = this.state
    const classError = errorMessage ? 'input-group__text--error' : ''

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
            onChange={event => this.setState({ valueInput: event.target.value })}
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
              data-event="click focus"
              data-for="tooltip-guide"
              className="input-group__tooltip"
            />
            <ReactTooltip
              effect="solid"
              globalEventOff="click"
              type="light"
              place="right"
              id="tooltip-guide"
              border
            >
              <div className="landing__tooltip">
                <p>
                  need help? <span>How to measure guide</span>
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
