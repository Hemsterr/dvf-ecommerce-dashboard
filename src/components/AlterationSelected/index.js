// @flow
import React from 'react'

// Components
import CheckBox from '../CheckBox'

type Props = {
  alterations: Array<{
    id: string,
    label: string,
    isChecked: boolean,
    price: number,
  }>,
}

class AlterationSelected extends React.PureComponent<Props> {
  static defaultProps = {
    alterations: [],
  }

  render() {
    const { alterations } = this.props
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
            <div className="alteration__item" key={item.id}>
              <CheckBox label={item.label} isChecked={item.isChecked} />
              <p className="alteration__price">{`${item.price}$`}</p>
            </div>
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
