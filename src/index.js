import App from './app'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux'
import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.min.css'
import './css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
