// Libs
import React from 'react'
import { render, wait } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// Component
import Routers from '../../routers'
import AppContext from '../../contexts'
import ROUTES from '../../constants/routes'

const store = {
  dispatch: jest.fn(),
  state: {
    alterations: [],
  },
}

const FittingOptionsScreen = router => (
  <AppContext.Provider value={store}>
    <MemoryRouter initialEntries={[router]}>
      <Routers />
    </MemoryRouter>
  </AppContext.Provider>
)

describe('Routers screen', () => {
  const { container, rerender } = render(FittingOptionsScreen(ROUTES.HOME))
  test('Testing render default router', async () => {
    await wait()
    expect(container).toMatchSnapshot()
    expect(container.querySelectorAll('.landing')).toBeTruthy()
  })

  test('Testing render order alteration router', () => {
    rerender(FittingOptionsScreen(ROUTES.BOOKING))

    expect(container.querySelectorAll('.fitting-options')).toBeTruthy()
  })

  test('Testing render order alteration router', () => {
    rerender(FittingOptionsScreen(ROUTES.ORDER_ALTERATIONS))

    expect(container.querySelectorAll('.orders')).toBeTruthy()
  })
})
