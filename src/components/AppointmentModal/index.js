// @flow
// Libs
import React from 'react'

// Components
import Modal from '../Modal'

type Props = {
  handleCloseModal: Function,
}

// TODO: mocking booking link
const bookingLink = 'https://booking.mangomint.com/852173'

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
              target="blank"
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
