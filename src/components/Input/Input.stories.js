// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Input from './index'

storiesOf('Input', module)
  .add('Default', () => <Input />)
  .add('Input primary', () => <Input label="TextBox" isBorder />)
  .add('Input has a error message', () => (
    <Input label="TextBox" errorMessage="You're enterd wrong format" isBorder />
  ))
  .add('Input has handle event on blur', () => (
    <Input label="TextBox" isBorder handleOnBlur={action('blurred')} />
  ))
  .add('Input has handle event on enter', () => (
    <Input label="TextBox" handleOnKeyDown={action('entered')} isBorder />
  ))
