// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import CheckBox from './index'

storiesOf('CheckBox', module)
  .add('Default', () => <CheckBox value="test" label="color thread" />)
  .add('checked', () => <CheckBox label="color thread" isChecked />)
  .add('disabled', () => <CheckBox label="color thread" disabled />)
  .add('checked and disabled', () => (
    <CheckBox label="color thread" checked isChecked />
  ))
