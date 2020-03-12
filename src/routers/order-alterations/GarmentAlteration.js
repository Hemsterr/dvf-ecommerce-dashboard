// @flow
// Lib
import React from 'react'
import isEqual from 'lodash.isequal'

// Components
import AlterationSelected from '../../components/AlterationSelected'

type Item = {
  id: string,
  label: string,
  isChecked: boolean,
  price: number,
  isInHome: boolean,
}

type Props = {
  garmentId: string,
  name: string,
  imageUrl: string,
  alterations: Array<Item>,
  handleSelectAlterations: Function,
}

const GarmentAlteration = (props: Props) => {
  const {
    name,
    garmentId,
    imageUrl,
    alterations,
    handleSelectAlterations,
  } = props

  return (
    <div key={garmentId} className="orders__item">
      <p className="orders__name">{name}</p>
      <img className="orders__image" src={imageUrl} alt={name} />
      <AlterationSelected
        garmentId={garmentId}
        alterations={alterations}
        handleSelectAlterations={handleSelectAlterations}
      />
    </div>
  )
}

GarmentAlteration.defaultProps = {
  name: '',
  garmentId: '',
  imageUrl: '',
  alterations: [],
  handleSelectAlterations: () => {},
}

const isEqualProps = (prevProps, nextProps) => isEqual(prevProps.name, nextProps.name)
  && isEqual(prevProps.garmentId, nextProps.garmentId)
  && isEqual(prevProps.imageUrl, nextProps.imageUrl)
  && isEqual(prevProps.alterations, nextProps.alterations)

export default React.memo<Props>(GarmentAlteration, (prevProps, nextProps) => isEqualProps(prevProps, nextProps)
)
