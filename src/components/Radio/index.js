// @flow
import React from 'react'

type Props = {
  value: string,
  label: string,
  className: string,
  isChecked?: boolean,
  disabled: boolean,
  setChecked: Function,
}

class Radio extends React.PureComponent<Props> {
  static defaultProps = {
    value: '',
    label: '',
    className: '',
    isChecked: false,
    disabled: false,
    setChecked: () => {},
  }

  render() {
    const {
      label,
      value,
      className,
      isChecked,
      disabled,
      setChecked,
    } = this.props

    return (
      <label className={`radio ${className}`}>
        <input
          type="radio"
          className="radio__input"
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={() => setChecked(value)}
        />
        <span className="radio__img" />
        {label}
      </label>
    )
  }
}

export default Radio
