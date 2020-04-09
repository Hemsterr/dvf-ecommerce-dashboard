import { createContext } from 'react'

export const INITIAL_STATE = {
  customer: {
    orderId: '',
    email: '',
  },
  alterations: [],
  fittingOption: '',
}

const AppContext = createContext(INITIAL_STATE)

export default AppContext
