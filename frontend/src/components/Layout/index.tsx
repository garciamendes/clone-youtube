// React
import React from 'react'

// Local
import TopMenu from './TopMenu'
import SideMenu from './SideMenu'
import { ContainerLayout } from './styles'
import { ILayoutProps } from './types'

export default function Layout({ children }: ILayoutProps) {
  return (
    <ContainerLayout>
      <TopMenu />

      <div className='container_children_layout'>
        <SideMenu />
        {children}
      </div>
    </ContainerLayout>
  )
}