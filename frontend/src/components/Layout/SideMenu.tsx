// React
import React from 'react'

// Local
import {
  ContainerSideMenu,
  ContainerSideMenuItems,
  ContainerSideMenuItemsExpanded
} from './styles'
import { Link, useLocation } from 'react-router-dom'
import { map } from 'lodash'
import { routes } from '../../routes'

export default function SideMenu() {
  // Hooks
  const location = useLocation()

  return (
    <ContainerSideMenu>
      {/* <ContainerSideMenuItems>
      <ul>
          {map(routes, (route, index) => {
            if (!route.menu)
              return

            let path = location.pathname.split('/')
            let active = false
            active = route.exact && location.pathname === route.path ||
              !route.exact && path[1] === route.path.split('/')[1]

            return (
              <li key={index}>
                <Link
                  to={route.path}
                  className={`content_item ${active && 'active'}`}>
                  {route.icon && (
                    <span>{route.icon}</span>
                  )}
                  <span>{route.name}</span>
                </Link>

                <Link to={route.path}>
                  {route.icon && (
                    <span>{route.icon}</span>
                  )}
                  <p>{route.name}</p>
                </Link>
              </li>
            )
          })}
        </ul>

      </ContainerSideMenuItems> */}

      <ContainerSideMenuItemsExpanded>
        <ul>
          {map(routes, (route, index) => {
            if (!route.menu)
              return

            let path = location.pathname.split('/')
            let active = false
            active = route.exact && location.pathname === route.path ||
              !route.exact && path[1] === route.path.split('/')[1]

            return (
              <li key={index}>
                <Link
                  to={route.path}
                  className={`content_item ${active && 'active'}`}>
                  {route.icon && (
                    <span>{route.icon}</span>
                  )}
                  <span>{route.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </ContainerSideMenuItemsExpanded>
    </ContainerSideMenu>
  )
}