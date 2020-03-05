// @flow
import React from 'react'

type Props = {
  title: string,
  description: string,
}

class FittingItem extends React.PureComponent<Props> {
  static defaultProps = {
    title: '',
    description: '',
  }

  render() {
    const { description, title } = this.props
    return (
      <div className={`fitting-item fitting-item__${title}`}>
        <div>
          <span className="fitting-item__icon" />
        </div>
        <div className="fitting-item__wrapper">
          <p className="fitting-item__title">{title}</p>
          <p className="fitting-item__description">{description}</p>
        </div>
      </div>
    )
  }
}

export default FittingItem
