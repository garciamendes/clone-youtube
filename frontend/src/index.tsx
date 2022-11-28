// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

// Local
import App from './App'
import store from './stores'
import { GlobalStyle } from './styles/global'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Route path='/' component={App} />
      </HashRouter>
    </Provider>
  </>
)
