// Third party
import produce from 'immer'

// Local
import { ISideMenu, sideMenuType } from './types'

const state_default: ISideMenu = {
  isMenuExpanded: true
}

export const expandMenuReducer = (state=state_default, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case sideMenuType.IS_MENU_EXPANDED:
        draft.isMenuExpanded = action.payload
        return draft
      default:
        return draft
    }
  })
}