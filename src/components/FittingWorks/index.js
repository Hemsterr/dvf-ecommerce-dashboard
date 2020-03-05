// @flow
import React from 'react'

// Components
import FittingItem from '../FittingItem'
import Button from '../Button'

type Props = {
  options: Array<{
    description: string,
    title: string,
  }>,
  title: string,
  handleOnClick: Function,
}

class FittingWorks extends React.PureComponent<Props> {
  static defaultProps = {
    options: [],
    title: '',
    handleOnClick: () => {},
  }

  render() {
    const { options, title, handleOnClick } = this.props
    return (
      <div>
        <p className="fitting-works__title">{title}</p>
        <div className="fitting-works">
          {options.map(item => (
            <FittingItem
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
        <Button
          className="btn btn__basic fitting-works__btn"
          label="Select this option"
          type="success"
          size="small"
          handleOnClick={handleOnClick}
        />
      </div>
    )
  }
}

export default FittingWorks
