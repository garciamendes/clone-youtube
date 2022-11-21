// React
import React from 'react'
import SideMenu from './SideMenu'

// Local
import { ContainerLayout } from './styles'
import TopMenu from './TopMenu'

export default function Layout({ children }: any) {
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