// Local
import { ISideMenu, sideMenuType } from './types'

export const expandMenu = ({ isMenuExpanded }: ISideMenu) => ({
  type: sideMenuType.IS_MENU_EXPANDED,
  payload: isMenuExpanded
})