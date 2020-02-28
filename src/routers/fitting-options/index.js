// @flow
// Libs
import React, { Suspense, lazy, useContext } from 'react'

// Components
import Indicator from '../../components/Indicator'

// Context
import AppContext from '../../contexts'
import TYPES from '../../actionTypes'

const Fittings = lazy(() => import('./Fittings'))
const FittingDetails = lazy(() => import('./FittingDetails'))

// Constants

const BookingScreen = () => {
  const { state, dispatch } = useContext(AppContext)
  const { fittingOption } = state

  // Handle select fitting options
  const handleSelectOption = value => {
    dispatch({
      type: TYPES.HANDLE_SELECT_FITTING_OPTIONS,
      value,
    })
  }

  return (
    <div className="fitting-options">
      <p className="fitting-options__title">
        Please select an option below to have your garment altered:
      </p>
      <Suspense fallback={<Indicator />}>
        {fittingOption ? (
          <FittingDetails
            handleSelectOption={handleSelectOption}
            fittingOption={fittingOption}
          />
        ) : (
          <Fittings handleSelectOption={handleSelectOption} />
        )}
      </Suspense>
      <div className="fitting-options__need-repairs">
        <p className="fitting-options__title fitting-options__need-repairs__title">
          Need repairs?
        </p>
        <p className="fitting-options__description">
          Please <i>click here</i> for Request Form
        </p>
        <span className="fitting-options__description">
          DVF may wish to replace your garment or provide complimentary
          servicing on your garment.{' '}
        </span>
        <span className="fitting-options__description">
          Once we receive status of your request, we will send email
          confirmation with more information on how to proceed with your
          repairs!
        </span>
      </div>
    </div>
  )
}

export default BookingScreen
