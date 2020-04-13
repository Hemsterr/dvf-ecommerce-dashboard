// @flow
import React from 'react'

// Components
import AlterationItem from '../AlterationItem'

type Item = {
  id: string,
  label: string,
  isChecked: boolean,
  price: number,
  isInHome: boolean,
  error: string,
}

type Props = {
  alterations: Array<Item>,
  handleSelectAlterations: Function,
  handleGetMeasurementValue: Function,
  garmentId: string,
}

class AlterationSelected extends React.PureComponent<Props> {
  static defaultProps = {
    alterations: [],
    handleSelectAlterations: () => {},
    handleGetMeasurementValue: () => {},
    garmentId: '',
  }

  render() {
    const {
      alterations,
      handleSelectAlterations,
      garmentId,
      handleGetMeasurementValue,
    } = this.props

    let price = 0
    let count = 0
    for (let i = 0; i < alterations.length; i++) {
      if (alterations[i].isChecked) {
        price += alterations[i].price
        count += 1
      }
    }

    return (
      <div className="alteration">
        <div className="alteration__wrapper">
          <p>Choose Alteration(s)</p>
        </div>
        <div className="alteration__selected">
          {alterations.map(item => (
            <AlterationItem
              garmentId={garmentId}
              handleSelectAlteration={handleSelectAlterations}
              handleUpdateMeasurement={handleGetMeasurementValue}
              key={item.id}
              label={item.label}
              isChecked={item.isChecked}
              isInHome={item.isInHome}
              price={item.price}
              id={item.id}
              measurementError={item.error}
            />
          ))}
        </div>
        <div className="alteration__wrapper">
          <p>{`Estimated Quote: ${count ? '$' + price : ''}`}</p>
        </div>
      </div>
    )
  }
}

export default AlterationSelected
