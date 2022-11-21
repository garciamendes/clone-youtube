// Third party
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// Local
import Home from './containers/home'
import NotFound from './containers/notFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  )
}