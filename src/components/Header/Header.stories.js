// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import Header from './index'

storiesOf('Header', module).add('Default', () => (
  <Router>
    <Header primary />
  </Router>
))
