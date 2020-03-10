// @flow
import React, { lazy, Suspense } from 'react'
import BookingItem from '../../components/BookingItem'
import Indicator from '../../components/Indicator'
import { fittingOptions, fittingSteps } from '../../constants/fittingOptions'

const FittingWorks = lazy(() => import('../../components/FittingWorks'))

type Props = {
  fittingOption: string,
  handleSelectOption: Function,
  handleSelectFittingOptions: Function,
}

class FittingDetails extends React.PureComponent<Props> {
  static defaultProps = {
    fittingOption: 'fitting-kit',
    handleSelectOption: () => {},
    handleSelectFittingOptions: () => {},
  }

  render() {
    const {
      fittingOption,
      handleSelectOption,
      handleSelectFittingOptions,
    } = this.props
    const fitting = fittingOptions.find(item => item.type === fittingOption)
    const options = fittingOptions.filter(item => item.type !== fittingOption)

    return (
      <div className="fitting-options__wrapper fitting-options__fitting-details">
        <Suspense fallback={<Indicator />}>
          <div className="fitting-options__selected">
            <BookingItem
              description={fitting.description}
              type={fittingOption}
            />
            <FittingWorks
              options={fittingSteps[fittingOption]}
              title={fitting.title}
              handleOnClick={handleSelectFittingOptions}
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
        </Suspense>
      </div>
    )
  }
}

export default FittingDetails
