// @flow
import React from 'react'

type Props = {
  type: string,
  handleSelectOption: Function,
  isSmall: boolean,
  description: string,
}

class BookingItem extends React.PureComponent<Props> {
  static defaultProps = {
    description: '',
    type: 'fitting-kit',
    handleSelectOption: () => {},
    isSmall: false,
  }

  handleSelectOption = () => {
    const { handleSelectOption, type } = this.props
    handleSelectOption(type)
  }

  render() {
    const { type, description, isSmall } = this.props

    return (
      <div
        className={
          isSmall
            ? `bookingItem bookingItem__${type} bookingItem__small`
            : `bookingItem bookingItem__${type}`
        }
        onClick={this.handleSelectOption}
        role="presentation"
      >
        <div>
          <span className="bookingItem__icon" />
        </div>
        {!!description && <p className="bookingItem__title">{description}</p>}
      </div>
    )
  }
}

export default BookingItem
