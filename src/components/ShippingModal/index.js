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
  customerInfo: Object,
}

const ShippingModal = (props: Props) => {
  const { handleCloseModal, customerInfo } = props
  const [user, setUser] = useState(customerInfo)
  const [error, setError] = useState({})
  const [isShowDVFInfo, setShowDVFInfo] = useState(false)
  const handleSetUserData = (value, key) => {
    user[key] = value
    setUser(user)
  }

  const confirmShippingAddress = () => {
    const errorMessage = shippingAddressValidation(user)
    if (Object.keys(errorMessage).length) {
      setError(errorMessage)
    } else {
      // TODO:
      // Handle generate shipping label
      setShowDVFInfo(true)
    }
  }

  return (
    <Modal className="shipping-modal" handleCloseModal={handleCloseModal}>
      {!isShowDVFInfo ? (
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
                defaultValue={customerInfo[item.key]}
              />
            ))}
            <div className="shipping-modal__stateWrapper">
              <Input
                label="State"
                className="shipping-modal__input shipping-modal__state col-xs-12 col-sm-12"
                isBorder
                handleOnBlur={event => handleSetUserData(event, 'state')}
                errorMessage={error.state}
                defaultValue={customerInfo.state}
              />
              <Input
                label="Zip Code"
                className="shipping-modal__input shipping-modal__zipCode col-xs-12 col-sm-12"
                isBorder
                handleOnBlur={event => handleSetUserData(event, 'zipCode')}
                errorMessage={error.zipCode}
                defaultValue={customerInfo.zipCode}
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
      ) : (
        <div className="shipping-modal">
          <p className="shipping-modal__header">Thank you!</p>
          <p className="shipping-modal__description">
            An email confirmation with your garment alterations
          </p>
          <p className="shipping-modal__description">
            and shipping label has been sent to:
          </p>
          <a
            className="shipping-modal__description"
            href={`mailTo:${customerInfo.email}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {customerInfo.email}
          </a>
          <p className="shipping-modal__contact-message">
            If you need further assistance, please contact
          </p>
          <p className="shipping-modal__contact">DVF Client Services</p>
          <p className="shipping-modal__contact">Monday-Friday 9AM-6PM EST</p>
          <p className="shipping-modal__contact">Saturday 9AM-5PM EST</p>
          <p className="shipping-modal__contact">
            Email:{' '}
            <a
              className="shipping-modal__contact"
              href="mailTo:clientservices@dvf.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              clientservices@dvf.com
            </a>
          </p>
          <p className="shipping-modal__contact">
            Call:{' '}
            <a
              className="shipping-modal__contact"
              href="tel:888-472-2383"
              rel="noopener noreferrer"
              target="_blank"
            >
              888-472-2383
            </a>
          </p>
        </div>
      )}
    </Modal>
  )
}

ShippingModal.defaultProps = {
  error: {},
  handleCloseModal: () => {},
}

export default ShippingModal
