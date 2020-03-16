// @flow
// Lib
import React, { useContext, useState } from 'react'
import Slider from 'react-slick'

// Contexts
import AppContext from '../../contexts'
import Types from '../../actionTypes'

// Components
import Button from '../../components/Button'
import GarmentAlteration from './GarmentAlteration'
import ShippingAddress from '../../components/ShippingModal'
import AppointmentModal from '../../components/AppointmentModal'

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
  const [isToggleShippingAddress, setToggleShippingAddress] = useState(false)
  const [isToggleAppointment, setToggleAppointment] = useState(false)

  // Handle select alterations
  const handleSelectAlterations = data => {
    dispatch({
      type: Types.HANDLE_SELECT_ALTERATION,
      data,
    })
  }

  const handleToggleModal = value => {
    if (user.fittingOption === 'fitting-kit') {
      setToggleShippingAddress(value)
    } else {
      setToggleAppointment(value)
    }
  }

  const handleAlteration = () => {
    handleToggleModal(true)
  }

  return (
    <div className="orders">
      <p className="orders__number">{`Your DVF Order #: ${user.orderNumber}`}</p>
      <Slider {...settings}>
        {alterations.map(item => (
          <GarmentAlteration
            key={item.id}
            garmentId={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            alterations={item.alterations}
            handleSelectAlterations={handleSelectAlterations}
          />
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
          handleOnClick={handleAlteration}
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
      {isToggleShippingAddress && (
        <ShippingAddress handleCloseModal={() => handleToggleModal(false)} />
      )}
      {isToggleAppointment && (
        <AppointmentModal handleCloseModal={() => handleToggleModal(false)} />
      )}
    </div>
  )
}

export default OrdersScreen
