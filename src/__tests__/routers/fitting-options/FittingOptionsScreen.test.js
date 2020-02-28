// Libs
import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Component
import FittingOptions from '../../../routers/fitting-options'
import AppContext from '../../../contexts'

const store = {
  dispatch: jest.fn(),
  state: {
    fittingOption: '',
  },
}

const FittingOptionsScreen = store => (
  <AppContext.Provider value={store}>
    <Router>
      <FittingOptions />
    </Router>
  </AppContext.Provider>
)

describe('FittingOptions screen', () => {
  const { container, rerender } = render(FittingOptionsScreen(store))

  test('Render the FittingOptions screen with default props', async () => {
    await wait()
    expect(container).toMatchSnapshot()
  })

  describe('Checking events', () => {
    test('should be rendered when click button', async () => {
      rerender(FittingOptionsScreen(store))
      const bookingItem = container.querySelector('.bookingItem__fitting-kit')
      fireEvent.click(bookingItem)
      await wait()
      rerender(
        FittingOptionsScreen({
          ...store,
          state: {
            fittingOption: 'fitting-kit',
          },
        })
      )
    })
  })
})
