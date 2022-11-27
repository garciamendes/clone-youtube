// React
import React from 'react'

// Third party
import { Books, GearSix, House, MonitorPlay } from 'phosphor-react'

// Local
import Home from './containers/home'
import { Library } from './containers/Library'
import { Settings } from './containers/settings'
import { Subscriptions } from './containers/subscriptions'
import { SizeIcons } from './styles/global'
import { IRoute } from './types'

export const routes: Array<IRoute> = [
  {
    component: Home,
    path: '/',
    menu: true,
    exact: true,
    name: 'Início',
    icon: <House size={SizeIcons} />
  },
  {
    component: Subscriptions,
    path: '/subscriptions',
    menu: true,
    exact: false,
    name: 'Inscrições',
    icon: <MonitorPlay size={SizeIcons} />
  },
  {
    component: Library,
    path: '/library',
    menu: true,
    exact: false,
    name: 'Biblioteca',
    icon: <Books size={SizeIcons} />
  },
  {
    component: Settings,
    path: '/account',
    menu: true,
    exact: false,
    name: 'Confirgurações',
    icon: <GearSix size={SizeIcons} />
  },
]