// @flow
// Lib
import React, { useContext } from 'react'
import Slider from 'react-slick'

// Contexts
import AppContext from '../../contexts'
import Types from '../../actionTypes'

// Components
import AlterationSelected from '../../components/AlterationSelected'
import Button from '../../components/Button'

// Helpers
import { getOrderPrice } from '../../helpers/alterations'
import LocalStorage from '../../helpers/localStorage'

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

const OrdersScreen = () => {
  // Get context data
  const { state, dispatch } = useContext(AppContext)
  const { alterations } = state
  const { price, count } = getOrderPrice(alterations)
  const localStorage = new LocalStorage()
  const user = localStorage.getUser()

  // Handle select alterations
  const handleSelectAlterations = data => {
    dispatch({
      type: Types.HANDLE_SELECT_ALTERATION,
      data,
    })
  }

  return (
    <div className="orders">
      <p className="orders__number">{`Your DVF Order #: ${user.orderNumber}`}</p>
      <Slider {...settings}>
        {alterations.map(item => (
          <div key={item.id} className="orders__item">
            <p className="orders__name">{item.name}</p>
            <img
              className="orders__image"
              src={item.imageUrl}
              alt={item.name}
            />
            <AlterationSelected
              garmentId={item.id}
              alterations={item.alterations}
              handleSelectAlterations={handleSelectAlterations}
            />
          </div>
        ))}
      </Slider>
      <div className="orders__footer">
        <p className="orders__number orders__price">
          {`Order Alteration Estimate: $${price}`}
        </p>
        <Button
          className="btn btn__primary"
          label="Alter Now"
          size="lager"
          handleOnClick={() => {}}
          disabled={!count}
        />
        <div className="orders__contact">
          <p>Have questions about your order?</p>
          <p className="orders__contact__email">Contact DVF at</p>
          <a
            className="orders__contact__email"
            href="mailto:clientservices@dvf.com"
          >
            clientservices@dvf.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default OrdersScreen
