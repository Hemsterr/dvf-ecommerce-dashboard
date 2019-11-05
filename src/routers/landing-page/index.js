// @flow
// Libs
import React, { useState, useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

// Components
import Input from '../../components/Input'
import Button from '../../components/Button'

// Constants
import images from '../../themes/images'
import ROUTES from '../../constants/routes'

// Helpers
import orderNumberValidation from '../../helpers/landing'

const LandingPage = () => {
  const [orderNumber, setOrderNumber] = useState('')
  const [error, setError] = useState({})
  const { history } = useContext(__RouterContext)

  // Handle submit form
  const handleSubmitForm = orderNumber => {
    // Define error message
    const errorMessage = orderNumberValidation({ orderNumber })

    // Set error if fields invalid
    setError(errorMessage)

    // Go to alterations page if fields valid
    if (!Object.keys(errorMessage).length) {
      history.push(ROUTES.ORDER_ALTERATIONS)
    }
  }

  const setOrderNumberValue = value => {
    setOrderNumber(value)
  }

  // Handle on keydown
  const handleOnKeyDown = value => {
    setOrderNumber(value)
    handleSubmitForm(value)
  }

  return (
    <div className="landing">
      <div>
        <h1 className="landing__hemster-logo">
          <img src={images.hemsterLogo} alt="Hemster" />
        </h1>
        <p className="landing__header">alterations</p>
        <h1 className="landing__hemster-logo">
          <img src={images.dvfLogo} alt="DVF" />
        </h1>
        <p className="landing__title">Please enter your order number:</p>
        <p className="landing__description">
          (order # can be found in your confirmation email)
        </p>
        <Input
          className="landing__input col-lg-4 col-xs-12 col-sm-12"
          defaultValue={orderNumber}
          handleOnBlur={setOrderNumberValue}
          errorMessage={error.orderNumber}
          handleOnKeyDown={handleOnKeyDown}
        />
        <Button
          className="btn btn__danger"
          label="Submit"
          handleOnClick={() => handleSubmitForm(orderNumber)}
        />
      </div>
    </div>
  )
}

export default LandingPage
