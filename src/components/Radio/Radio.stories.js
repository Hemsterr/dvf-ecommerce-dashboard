// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Radio from './index'

storiesOf('Radio', module)
  .add('Default', () => <Radio value="test" label="color thread" />)
  .add('checked', () => <Radio label="color thread" isChecked />)
  .add('disabled', () => <Radio label="color thread" disabled />)
  .add('checked and disabled', () => (
    <Radio label="color thread" disabled isChecked />
  ))
