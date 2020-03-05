// Libs
import { Route, Switch, __RouterContext } from 'react-router-dom'
import React, { Suspense, useContext, lazy } from 'react'

// Components
import Header from '../components/Header'

// Constants
import ROUTES from '../constants/routes'

// Screens
import LandingPage from './landing-page'

// Components
import Indicator from '../components/Indicator'

const OrderAlterations = lazy(() => import('./order-alterations'))
const FittingOptions = lazy(() => import('./fitting-options'))

const App = () => {
  const { location } = useContext(__RouterContext)
  const { pathname } = location

  return (
    <div>
      {(pathname.indexOf(ROUTES.ORDER_ALTERATIONS) >= 0
        || pathname.indexOf(ROUTES.FITTING_OPTIONS) >= 0) && (
        <Header primary={pathname.indexOf(ROUTES.ORDER_ALTERATIONS) >= 0} />
      )}
      <Suspense fallback={<Indicator />}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={LandingPage} />
          <Route
            exact
            path={ROUTES.ORDER_ALTERATIONS}
            component={OrderAlterations}
          />
          <Route
            exact
            path={ROUTES.FITTING_OPTIONS}
            component={FittingOptions}
          />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
