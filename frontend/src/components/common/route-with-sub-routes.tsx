// React
import React from 'react'
import { Route } from 'react-router-dom'

// Project
import { IRoute } from '../../types'

export function RouteWithSubRoutes(route: IRoute) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={
        props => <route.component {...props} routes={route.routes} />
      }
    />
  )
}