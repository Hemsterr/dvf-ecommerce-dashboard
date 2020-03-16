// @flow
// Libs
import React from 'react'

// Components
import Modal from '../Modal'
import Button from '../Button'

type Props = {
  handleCloseModal: Function,
  handleAcceptDisclaimer: Function,
}

class DisclaimerModal extends React.PureComponent<Props> {
  static defaultProps = {
    handleCloseModal: () => {},
    handleAcceptDisclaimer: () => {},
  }

  render() {
    const { handleCloseModal, handleAcceptDisclaimer } = this.props

    return (
      <Modal className="shipping-modal" handleCloseModal={handleCloseModal}>
        <div className="shipping-modal">
          <div className="disclaimer">
            <p className="shipping-modal__title">Disclaimer</p>
            <p className="shipping-modal__title">
              The price generated is a general quote.
            </p>
            <p className="shipping-modal__title">
              You will receive an email confirmation with the final price after
              the Hemster team receives and reviews your garments and alteration
              requests.
            </p>
            <Button
              className="btn btn__basic shipping-modal__btn"
              label="Accept"
              type="success"
              size="small"
              handleOnClick={() => handleAcceptDisclaimer()}
            />
            <div className="disclaimer__btnWrapper">
              <Button
                className="btn btn__basic disclaimer__btn"
                label="Decline"
                size="small"
                handleOnClick={() => handleCloseModal()}
              />
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default DisclaimerModal
