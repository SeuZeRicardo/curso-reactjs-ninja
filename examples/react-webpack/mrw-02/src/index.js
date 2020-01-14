'use strict'

/** import dependency */
import Title from './app'
import React from 'react';
import { render } from 'react-dom';

render(
  <Title />,
  document.querySelector('[data-js="app"]'));