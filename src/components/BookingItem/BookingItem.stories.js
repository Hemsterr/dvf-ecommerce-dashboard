// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import BookingItem from './index'

storiesOf('BookingItem', module).add('Default', () => (
  <BookingItem title="I would like to fit myself using Hemster's Fitting Kit" />
))
