// @flow
import React from 'react'
import BookingItem from '../../components/BookingItem'
import { fittingOptions } from '../../constants/fittingOptions'

type Props = {
  handleSelectOption: Function,
}

class BookingItems extends React.PureComponent<Props> {
  static defaultProps = {
    handleSelectOption: () => {},
  }

  render() {
    const { handleSelectOption } = this.props
    return (
      <div className="fitting-options__wrapper">
        {fittingOptions.map(item => (
          <BookingItem
            key={item.type}
            type={item.type}
            description={item.description}
            handleSelectOption={handleSelectOption}
          />
        ))}
      </div>
    )
  }
}

export default BookingItems
