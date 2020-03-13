// @flow
// Lib
import * as React from 'react'

type Props = {
  handleCloseModal: Function,
  children: React.Node,
  title: string,
  className: string,
}

class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    title: '',
  }

  render() {
    const {
      handleCloseModal, children, title, className
    } = this.props

    return (
      <div className="modal-wrapper">
        <div className={`modal ${className}`}>
          <div className="modal__dialog">
            <div
              className="modal__header"
              role="presentation"
              onClick={handleCloseModal}
            >
              <div className="modal__icon" />
            </div>
            <p className="modal__title">{title}</p>
            <div className="modal__body">{children}</div>
          </div>
        </div>
        <div
          role="presentation"
          className="modal__backdrop"
          onClick={handleCloseModal}
        />
      </div>
    )
  }
}

export default Modal
