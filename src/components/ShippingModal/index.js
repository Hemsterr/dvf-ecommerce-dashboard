// @flow
// Libs
import React, { useState } from 'react'

// Components
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'

// Constant
import { shippingAddress } from '../../constants/alterations'

type Props = {
  handleCloseModal: Function,
  error: Object,
}

const ShippingModal = (props: Props) => {
  const { error, handleCloseModal } = props
  const [user, setUser] = useState({})

  const handleSetUserData = (value, key) => {
    user[key] = value
    setUser(user)
  }

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
              label={item.label}
              className={
                item.key === 'state' || item.key === 'zipCode'
                  ? 'shipping-modal__input shipping-modal__state col-lg-4 col-xs-12 col-sm-12'
                  : 'shipping-modal__input col-lg-4 col-xs-12 col-sm-12'
              }
              isBorder
              handleOnBlur={event => handleSetUserData(event, item.key)}
              errorMessage={error.orderNumber}
            />
          ))}
          <div className="shipping-modal__stateWrapper">
            <Input
              label="State"
              className="shipping-modal__input shipping-modal__state col-lg-4 col-xs-12 col-sm-12"
              isBorder
              handleOnBlur={event => handleSetUserData(event, 'state')}
              errorMessage={error.orderNumber}
            />
            <Input
              label="Zip Code"
              className="shipping-modal__input shipping-modal__zipCode col-lg-4 col-xs-12 col-sm-12"
              isBorder
              handleOnBlur={event => handleSetUserData(event, 'zipCode')}
              errorMessage={error.orderNumber}
            />
          </div>
          <Button
            className="btn btn__basic shipping-modal__btn"
            label="Confirm"
            type="success"
            size="small"
            handleOnClick={() => {}}
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
