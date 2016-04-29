import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Router, hashHistory } from 'react-router'

// Routes
import childRoute from './routes/child'

// UI Component
import App from './components/app'

let store = createStore(rootReducer)

const rootRoute = {
  path: '/',
  component: App,
  childRoutes: [ childRoute ]
}

render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('appRoot')
)
