// @flow
import React from 'react'
import BookingItem from '../../components/BookingItem'
import FittingWorks from '../../components/FittingWorks'
import { fittingOptions, fittingSteps } from '../../constants/fittingOptions'

type Props = {
  fittingOption: string,
  handleSelectOption: Function,
}

class FittingDetails extends React.PureComponent<Props> {
  static defaultProps = {
    fittingOption: 'fitting-kit',
    handleSelectOption: () => {},
  }

  render() {
    const { fittingOption, handleSelectOption } = this.props
    const fitting = fittingOptions.find(item => item.type === fittingOption)
    const options = fittingOptions.filter(item => item.type !== fittingOption)

    return (
      <div className="fitting-options__wrapper fitting-options__fitting-details">
        <div className="fitting-options__selected">
          <BookingItem description={fitting.description} type={fittingOption} />
          <FittingWorks
            options={fittingSteps[fittingOption]}
            title={fitting.title}
          />
        </div>
        <div>
          {options.map(item => (
            <BookingItem
              handleSelectOption={handleSelectOption}
              type={item.type}
              key={item.type}
              isSmall
              description={item.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default FittingDetails