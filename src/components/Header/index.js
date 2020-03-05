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
      <Link to={ROUTES.FITTING_OPTIONS}>
        <img src={images.hemster} alt="Hemster" />
      </Link>
    </h1>
    {primary && (
      <Link to={ROUTES.FITTING_OPTIONS} className="main-header__link">
        back to fitting options
      </Link>
    )}
  </header>
)

Header.defaultProps = {
  primary: false,
}

export default Header
