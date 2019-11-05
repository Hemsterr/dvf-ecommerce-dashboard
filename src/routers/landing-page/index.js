// @flow
// Libs
import React from 'react'

// Components
import Input from '../../components/Input'
import Button from '../../components/Button'

// Constants
import images from '../../themes/images'

const LandingPage = () => {
  const handleSubmitForm = () => {}

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
          errorMessage="You're enterd wrong format"
        />
        <Button
          className="btn btn__danger"
          label="Submit"
          handleOnClick={handleSubmitForm}
        />
      </div>
    </div>
  )
}

export default LandingPage
