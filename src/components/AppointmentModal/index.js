// @flow
// Libs
import React from 'react'

// Components
import Modal from '../Modal'

type Props = {
  handleCloseModal: Function,
}

const bookingLink = 'https://calendly.com/vanessapatel/virtual-fitting'

class AppointmentModal extends React.PureComponent<Props> {
  static defaultProps = {
    handleCloseModal: () => {},
  }

  render() {
    const { handleCloseModal } = this.props

    return (
      <Modal className="shipping-modal" handleCloseModal={handleCloseModal}>
        <div className="shipping-modal">
          <p className="shipping-modal__title">
            Ready to book your appointment?
          </p>
          <div className="shipping-modal__appointmentWrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={bookingLink}
              className="btn btn__success btn__small shipping-modal__appointment"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </Modal>
    )
  }
}

export default AppointmentModal
