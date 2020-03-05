// @flow
// Libs
import React, { useState, useContext } from 'react'
import { __RouterContext } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

// Components
import Input from '../../components/Input'
import Button from '../../components/Button'

// Constants
import images from '../../themes/images'
import ROUTES from '../../constants/routes'

// Helpers
import orderNumberValidation from '../../helpers/landing'
import LocalStorage from '../../helpers/localStorage'

const localStorage = new LocalStorage()

const LandingPage = () => {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})
  const { history } = useContext(__RouterContext)

  // Handle submit form
  const handleSubmitForm = (orderNumber, email) => {
    // Define error message
    const errorMessage = orderNumberValidation({ orderNumber, email })

    // Set error if fields invalid
    setError(errorMessage)

    // Go to alterations page if fields valid
    if (!Object.keys(errorMessage).length) {
      // Set user in local storage
      localStorage.setUser({ email, orderNumber })
      history.push(ROUTES.FITTING_OPTIONS)
    }
  }

  const setOrderNumberValue = value => {
    setOrderNumber(value)
  }

  // Handle on keydown
  const handleOnKeyDown = value => {
    setOrderNumber(value)
    handleSubmitForm(orderNumber, value)
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
        />
        {error.orderNotFound && (
          <i className="input-group__label-error">
            {error.orderNotFound || 'order # not found '}
            <span data-tip="" data-for="test">
              (?)
            </span>
          </i>
        )}
        <p className="landing__email">Please enter your email:</p>
        <Input
          className="landing__input col-lg-4 col-xs-12 col-sm-12"
          defaultValue={email}
          handleOnBlur={setEmail}
          errorMessage={error.email}
          handleOnKeyDown={handleOnKeyDown}
        />
        {error.emailNotFound && (
          <i className="input-group__label-error">
            {error.emailNotFound}
            <span data-tip="" data-for="test">
              (?)
            </span>
          </i>
        )}
        <Button
          className="btn btn__danger landing__btn"
          label="Submit"
          handleOnClick={() => handleSubmitForm(orderNumber, email)}
        />
        <ReactTooltip type="light" place="right" id="test" border>
          <div className="landing__tooltip">
            <p>For assistance,</p>
            <p className="landing__tooltip__contact">please contact us:</p>
            <p>Monday - friday</p>
            <p>9am - 6pm est</p>
            <p>Saturday</p>
            <p className="landing__tooltip__contact">9am - 5pm est</p>
            <p>clientservices@dvf.com</p>
            <p>888-472-2383</p>
          </div>
        </ReactTooltip>
      </div>
    </div>
  )
}

export default LandingPage
