// Libs
import React, { useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContext, { INITIAL_STATE } from './contexts'
import reducer from './reducers'

// components
import MainLayout from './routers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const store = { state, dispatch }

  return (
    <Router>
      <AppContext.Provider value={store}>
        <MainLayout />
      </AppContext.Provider>
    </Router>
  )
}

export default App
