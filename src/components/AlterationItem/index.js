// @flow
import React from 'react'

type Props = {
  alteration: string,
}

class AlterationItem extends React.PureComponent<Props> {
  static defaultProps = {
    alteration: '',
  }

  render() {
    const { alteration } = this.props

    return (
      <div className="alteration-item">
        <p>Item:</p>
        <p>{alteration}</p>
      </div>
    )
  }
}

export default AlterationItem
