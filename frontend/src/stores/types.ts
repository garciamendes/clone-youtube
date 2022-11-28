// Third party
import { AxiosError, AxiosResponse } from 'axios'

// Local
import { ISideMenu } from './modules/SideMenu/types'

export interface ICallBack {
  onFinish?: (response?: AxiosResponse) => void,
  onError?: (response?: AxiosError) => void,
  onFinally?: () => void,
}

export type callBackDefault = ICallBack | (() => void)

export interface IStateRedux {
  expandMenu: ISideMenu
}
