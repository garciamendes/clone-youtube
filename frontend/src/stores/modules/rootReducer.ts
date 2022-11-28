// Third party
import { combineReducers } from 'redux'

// Local
import { expandMenuReducer } from './SideMenu/reducer'

export default combineReducers({
  expandMenu: expandMenuReducer
})