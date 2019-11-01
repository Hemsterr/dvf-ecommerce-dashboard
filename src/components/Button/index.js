// @flow
import React from 'react'

type Props = {
  label: string,
  handleOnClick: Function,
  className: string,
  disabled: boolean,
  size: string,
}

class Button extends React.PureComponent<Props> {
  static defaultProps = {
    label: '',
    className: '',
    disabled: false,
    handleOnClick: () => {},
    size: 'medium',
  }

  render() {
    const {
      label, className, handleOnClick, disabled, size
    } = this.props

    return (
      <button
        className={`${className} btn__${size}`}
        onClick={handleOnClick}
        disabled={disabled}
        type="button"
      >
        {label}
      </button>
    )
  }
}

export default Button
