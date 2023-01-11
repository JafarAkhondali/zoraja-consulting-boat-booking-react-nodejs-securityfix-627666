
//
//  index.tsx
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { compose, createStore } from 'redux'

import App from './app'
import { rootReducer } from './reducers'

const appElementPromise = new Promise<HTMLElement>((resolve, reject) => {
  const elem = document.getElementById('app')
  if (elem) {
    resolve(elem)
    return
  }

  document.addEventListener('DOMContentLoaded', e => {
    const elem = document.getElementById('app')
    if (elem) {
      resolve(elem)
    } else {
      reject(new Error('app element could not be found'))
    }
  })
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

appElementPromise.then(appElement => {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(rootReducer, undefined /* preloaded state */, reduxDevTools)

  const root = createRoot(appElement)
  root.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>)
})
