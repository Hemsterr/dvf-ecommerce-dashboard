// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Button from './index'

storiesOf('Button', module)
  .add('Default', () => (
    <Button label="default" handleOnClick={action('clicked')} />
  ))
  .add('Disabled', () => (
    <Button label="Disabled" handleOnClick={action('clicked')} disabled />
  ))
  .add('Danger', () => (
    <Button
      className="btn btn__danger"
      label="Danger"
      handleOnClick={action('clicked')}
    />
  ))
  .add('Success', () => (
    <Button
      className="btn btn__success"
      label="Success"
      handleOnClick={action('clicked')}
    />
  ))
  .add('Primary', () => (
    <Button
      className="btn btn__primary"
      label="Primary"
      handleOnClick={action('clicked')}
    />
  ))
  .add('Size small', () => (
    <Button
      className="btn btn__basic btn__small"
      label="small"
      handleOnClick={action('clicked')}
    />
  ))
  .add('Size medium', () => (
    <Button
      className="btn btn__basic btn__medium"
      label="medium"
      handleOnClick={action('clicked')}
    />
  ))
  .add('Size lager', () => (
    <Button
      className="btn btn__basic btn__lager"
      label="lager"
      handleOnClick={action('clicked')}
    />
  ))
