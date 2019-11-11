import { createContext } from 'react'

// TODO: mocking data to testing UI
import alterations from '../constants/alterations'

export const INITIAL_STATE = {
  customer: {
    orderId: '',
    email: '',
  },
  // TODO: mocking data
  // alterations: [],
  alterations,
}

const AppContext = createContext(INITIAL_STATE)

export default AppContext
