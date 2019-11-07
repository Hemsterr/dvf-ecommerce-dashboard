// @flow
// Lib
import React from 'react'
import Slider from 'react-slick'

// Components
import AlterationSelected from '../../components/AlterationSelected'
import Button from '../../components/Button'

import alterations from '../../constants/alterations'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 450,
    },
  ],
}

const OrdersScreen = () => (
  <div className="orders">
    <p className="orders__number">Your DVF Order #: 0012341</p>
    <Slider {...settings}>
      {alterations.map(item => (
        <div key={item.id} className="orders__item">
          <p className="orders__name">{item.name}</p>
          <img className="orders__image" src={item.imageUrl} alt={item.name} />
          <AlterationSelected alterations={item.alterations} />
        </div>
      ))}
    </Slider>
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
