// React
import React from 'react'

// Third party
import {
  List,
  BellSimple,
} from 'phosphor-react'

// Project
import { SearchBar } from '../SearchBar'
import LogoImg from '../../static/youtube.png'
import { SizeIcons } from '../../styles/global'

// Local
import { ContainerTopMenu, Logo } from './styles'

export default function TopMenu() {
  return (
    <ContainerTopMenu>
      <div className='content_menu_logo'>
        <List className='cursor_pointer' size={SizeIcons} />
        <Logo className='cursor_pointer' src={LogoImg} />
      </div>

      <SearchBar />

      <div className='content_actions_profile'>
        <BellSimple className='cursor_pointer' size={SizeIcons} />
      </div>
    </ContainerTopMenu>
  )
}