// React
import { ReactNode } from 'react'

export interface ILayoutProps {
  children: ReactNode
}

export interface IMenuExpanded {
  isMenuExpanded: boolean
}

export interface ILoadingProps {
  percentLoading: number
}