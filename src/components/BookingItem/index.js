// @flow
import React from 'react'

type Props = {
  title: string,
  type: string,
  handleSelectOption: Function,
}

class BookingItem extends React.PureComponent<Props> {
  static defaultProps = {
    title: '',
    type: 'fitting-kit',
    handleSelectOption: () => {},
  }

  render() {
    const { type, title, handleSelectOption } = this.props
    return (
      <div
        className={`bookingItem bookingItem__${type}`}
        onClick={handleSelectOption}
        role="presentation"
      >
        <div>
          <span className="bookingItem__icon" />
        </div>
        <p className="bookingItem__title">{title}</p>
      </div>
    )
  }
}

export default BookingItem
