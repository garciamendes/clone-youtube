// React
import React from 'react'
import { Switch } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Local
import Layout from './components/Layout'
import { routes } from './routes'
import { RouteWithSubRoutes } from './components/common/route-with-sub-routes'

export default function App() {
  return (
    <Layout>
      <Switch>
        {map(routes, (route, index) => {
          return <RouteWithSubRoutes key={index} {...route} />
        })}
      </Switch>
    </Layout>
  )
}
