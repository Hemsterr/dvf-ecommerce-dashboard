// @flow
import React from 'react'
import { Link } from 'react-router-dom'

// Themes
import images from '../../themes/images'

// Constants
import ROUTES from '../../constants/routes'

type Props = {
  primary: Boolean,
}

const Header = ({ primary }: Props) => (
  <header className="main-header">
    <h1>
      <Link to={ROUTES.ORDER_ALTERATIONS}>
        <img src={images.hemster} alt="Hemster" />
      </Link>
    </h1>
    {primary && (
      <Link to={ROUTES.ORDER_ALTERATIONS} className="main-header__link">
        back to quote generator
      </Link>
    )}
  </header>
)

Header.defaultProps = {
  primary: false,
}

export default Header
