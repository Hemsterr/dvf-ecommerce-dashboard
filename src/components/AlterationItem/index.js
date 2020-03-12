// @flow
import React from 'react'
import ReactTooltip from 'react-tooltip'

// Components
import CheckBox from '../CheckBox'
import Input from '../Input'

// type Item = {
//   id: string,
//   label: string,
//   isChecked: boolean,
//   price: number,
//   isInHome: boolean,
// }

type Props = {
  alteration: Object,
  error: Object,
  handleSelectAlteration: Function,
  handleUpdateMeasurement: Function,
}

class AlterationItem extends React.PureComponent<Props> {
  static defaultProps = {
    alteration: {},
    error: {},
    handleSelectAlteration: () => {},
    handleUpdateMeasurement: () => {},
  }

  render() {
    const {
      alteration,
      error,
      handleSelectAlteration,
      handleUpdateMeasurement,
    } = this.props

    return (
      <>
        <div className="alteration__item">
          <div className="alteration__checkbox-wrapper">
            <CheckBox
              label={alteration.label}
              isChecked={alteration.isChecked}
              setChecked={handleSelectAlteration}
              disabled={alteration.isInHome}
            />
            {alteration.isInHome && (
              <span
                data-tip=""
                data-for="in-home"
                className="alteration__in-home"
              />
            )}
          </div>
          <p className="alteration__price">{`${alteration.price}$`}</p>
          <ReactTooltip type="light" place="right" id="in-home" border>
            <div className="landing__tooltip">
              <p>available for in-home fitting only</p>
            </div>
          </ReactTooltip>
        </div>
        {alteration.isChecked && (
          <Input
            className="alteration__measurement col-xs-12 col-sm-12"
            handleOnBlur={handleUpdateMeasurement}
            errorMessage={error.email}
            placeholder="measurement - # off"
          />
        )}
      </>
    )
  }
}

export default AlterationItem
