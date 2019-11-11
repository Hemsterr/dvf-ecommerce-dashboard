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

class CheckBox extends React.PureComponent<Props> {
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
      <label className={`checkbox ${className}`}>
        <input
          type="checkbox"
          className="checkbox__input"
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={setChecked}
        />
        <span className="checkbox__img" />
        {label}
      </label>
    )
  }
}

export default CheckBox
