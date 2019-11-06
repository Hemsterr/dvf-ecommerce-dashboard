// @flow
// Lib
import React from 'react'

// Components
import AlterationSelected from '../../components/AlterationSelected'
import Button from '../../components/Button'

import alterations from '../../constants/alterations'

const OrdersScreen = () => (
  <div className="orders">
    <p className="orders__number">Your DVF Order #: 0012341</p>
    <div className="orders__wrapper">
      {alterations.map(item => (
        <div key={item.id} className="orders__item">
          <p className="orders__name">{item.name}</p>
          <img className="orders__image" src={item.imageUrl} alt={item.name} />
          <AlterationSelected alterations={item.alterations} />
        </div>
      ))}
    </div>
    <div className="orders__footer">
      <p className="orders__number orders__price">
        Order Alteration Estimate: $30
      </p>
      <Button
        className="btn btn__primary"
        label="Alter Now"
        size="lager"
        handleOnClick={() => {}}
      />
    </div>
  </div>
)

export default OrdersScreen
