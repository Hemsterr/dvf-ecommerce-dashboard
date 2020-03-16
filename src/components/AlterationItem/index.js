// @flow
import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

// Components
import CheckBox from '../CheckBox'
import Input from '../Input'

// Helpers
import { getWindowDimensions } from '../../helpers/utilities'

type Props = {
  label: string,
  id: string,
  garmentId: string,
  measurementError?: string,
  isChecked: boolean,
  isInHome: boolean,
  price: number,
  handleSelectAlteration: Function,
  handleUpdateMeasurement: Function,
}

const AlterationItem = (props: Props) => {
  const {
    label,
    isChecked,
    isInHome,
    price,
    id,
    garmentId,
    measurementError,
    handleUpdateMeasurement,
    handleSelectAlteration,
  } = props

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const tooltipPlace = windowDimensions.width > 1200 ? 'right' : 'bottom'

  return (
    <>
      <div className="alteration__item">
        <div className="alteration__checkbox-wrapper">
          <CheckBox
            label={label}
            isChecked={isChecked}
            setChecked={() => handleSelectAlteration({ garmentId, id })}
            disabled={isInHome}
          />
          {isInHome && (
            <span
              data-tip=""
              data-for="in-home"
              className="alteration__in-home"
            />
          )}
        </div>
        <p className="alteration__price">{`${price}$`}</p>
        <ReactTooltip type="light" place={tooltipPlace} id="in-home" border>
          <div className="landing__tooltip">
            <p>available for in-home fitting only</p>
          </div>
        </ReactTooltip>
      </div>
      {isChecked && (
        <Input
          className="alteration__measurement col-xs-12 col-sm-12"
          handleOnBlur={handleUpdateMeasurement}
          errorMessage={measurementError}
          placeholder="measurement - # off"
          isMeasurement
          id={id}
          tooltipPlace={tooltipPlace}
        />
      )}
    </>
  )
}

AlterationItem.defaultProps = {
  label: '',
  id: '',
  garmentId: '',
  measurementError: '',
  isChecked: false,
  isInHome: false,
  price: 0,
  handleSelectAlteration: () => {},
  handleUpdateMeasurement: () => {},
}

const isEqualProps = (prevProps, nextProps) => prevProps.label === nextProps.label
  && prevProps.label === nextProps.label
  && prevProps.id === nextProps.id
  && prevProps.garmentId === nextProps.garmentId
  && prevProps.measurementError === nextProps.measurementError
  && prevProps.isChecked === nextProps.isChecked
  && prevProps.isInHome === nextProps.isInHome
  && prevProps.price === nextProps.price

export default React.memo<Props>(AlterationItem, (prevProps, nextProps) => isEqualProps(prevProps, nextProps)
)
