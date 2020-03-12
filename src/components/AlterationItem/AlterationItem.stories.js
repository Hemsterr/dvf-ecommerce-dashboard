// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import AlterationItem from './index'

storiesOf('AlterationItem', module).add('Default', () => (
  <AlterationItem alteration={{ label: 'Alter Shoulders/Arms' }} />
))

storiesOf('AlterationItem', module).add('Selected', () => (
  <AlterationItem
    alteration={{ label: 'Alter Shoulders/Arms', isChecked: true }}
  />
))
