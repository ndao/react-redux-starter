import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer)

ReactDOM.render(
        <Provider store={store}>
          <h1>Hello world!</h1>
        </Provider>,
        document.getElementById('appRoot')
      )
