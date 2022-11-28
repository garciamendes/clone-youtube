// React
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Project
import { routes } from '../../routes'
import { IStateRedux } from '../../stores/types'
import { ISideMenu } from '../../stores/modules/SideMenu/types'

// Local
import {
  ContainerSideMenu,
  ContainerSideMenuItems,
  ContainerSideMenuItemsExpanded
} from './styles'

export default function SideMenu() {
  // Redux
  const { isMenuExpanded } = useSelector<IStateRedux, ISideMenu>(store => store.expandMenu)

  // Hooks
  const location = useLocation()

  return (
    <ContainerSideMenu isMenuExpanded={isMenuExpanded}>
      {isMenuExpanded ? (
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
                  {route.isDivider && (
                    <span className='divider'></span>
                  )}

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
      ) : (
        <ContainerSideMenuItems>
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
        </ContainerSideMenuItems>
      )}
    </ContainerSideMenu>
  )
}