// React
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Third party
import {
  List,
  BellSimple,
} from 'phosphor-react'

// Project
import { SearchBar } from '../SearchBar'
import LogoImg from '../../static/youtube.png'
import { SizeIcons } from '../../styles/global'
import { IStateRedux } from '../../stores/types'
import { ISideMenu } from '../../stores/modules/SideMenu/types'
import { expandMenu } from '../../stores/modules/SideMenu/action'

// Local
import { ContainerTopMenu, Logo } from './styles'

export default function TopMenu() {
  // Redux
  const { isMenuExpanded } = useSelector<IStateRedux, ISideMenu>(store => store.expandMenu)

  // Hooks
  const dispatch = useDispatch()

  const handleMenuExpansion = () => {
    dispatch(expandMenu({ isMenuExpanded: !isMenuExpanded }))
  }

  return (
    <ContainerTopMenu percentLoading={0}>
      <div className='content_menu_logo'>
        <span onClick={handleMenuExpansion} className='more_info_menu'>
          <List className='cursor_pointer' size={SizeIcons} />
        </span>
        <Logo className='cursor_pointer' src={LogoImg} />
      </div>

      <SearchBar />

      <div className='content_actions_profile'>
        <BellSimple className='cursor_pointer' size={SizeIcons} />
      </div>
    </ContainerTopMenu>
  )
}