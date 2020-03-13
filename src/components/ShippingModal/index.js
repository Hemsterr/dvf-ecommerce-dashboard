// @flow
// Libs
import React, { useState } from 'react'

// Components
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'

// Constant
import { shippingAddress } from '../../constants/alterations'
import { shippingAddressValidation } from '../../helpers/alterations'

type Props = {
  handleCloseModal: Function,
}

const ShippingModal = (props: Props) => {
  const { handleCloseModal } = props
  const [user, setUser] = useState({})
  const [error, setError] = useState({})
  const handleSetUserData = (value, key) => {
    user[key] = value
    setUser(user)
  }

  const confirmShippingAddress = () => {
    const errorMessage = shippingAddressValidation(user)
    if (Object.keys(errorMessage).length) {
      setError(errorMessage)
    } else {
    }
  }
  console.log(error)
  return (
    <Modal className="shipping-modal" handleCloseModal={handleCloseModal}>
      <div className="shipping-modal">
        <p className="shipping-modal__title">Request a Shipping Label</p>
        <p className="shipping-modal__title">
          Please confirm email & shipping address
        </p>
        <div className="shipping-modal__address">
          {shippingAddress.map(item => (
            <Input
              key={item.key}
              label={item.label}
              className="shipping-modal__input"
              isBorder
              handleOnBlur={event => handleSetUserData(event, item.key)}
              errorMessage={error[item.key]}
            />
          ))}
          <div className="shipping-modal__stateWrapper">
            <Input
              label="State"
              className="shipping-modal__input shipping-modal__state col-xs-12 col-sm-12"
              isBorder
              handleOnBlur={event => handleSetUserData(event, 'state')}
              errorMessage={error.state}
            />
            <Input
              label="Zip Code"
              className="shipping-modal__input shipping-modal__zipCode col-xs-12 col-sm-12"
              isBorder
              handleOnBlur={event => handleSetUserData(event, 'zipCode')}
              errorMessage={error.zipCode}
            />
          </div>
          <Button
            className="btn btn__basic shipping-modal__btn"
            label="Confirm"
            type="success"
            size="small"
            handleOnClick={() => confirmShippingAddress()}
          />
        </div>
      </div>
    </Modal>
  )
}

ShippingModal.defaultProps = {
  error: {},
  handleCloseModal: () => {},
}

export default ShippingModal
