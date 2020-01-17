'use strict'

/** import dependency */
import React from 'react';
import { render } from 'react-dom';
import App from './app'
import { AppContainer } from 'react-hot-loader';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
};

renderApp(App)

/** Verify if have some modify in the file and reload */
if(module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}