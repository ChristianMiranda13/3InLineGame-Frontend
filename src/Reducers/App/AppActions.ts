export enum AppActionTypes {
  SHOW_DIALOG = 'app/SHOW_DIALOG',
  SHOW_SPINNER = 'app/SHOW_SPINNER',
  SET_OPEN_DRAWER = 'app/SET_OPEN_DRAWER',
  SET_LOADING_TABLE = 'app/SET_LOADING_TABLE',
  SHOW_BACK = 'app/SHOW_BACK',
  LAST_ACTION = 'app/LAST_ACTION',
  ERROR_REQUEST = 'app/ERROR_REQUEST',
  API_LOGIN = 'app/API_LOGIN',
  SHOW_POPUP_WARN_IMPORT_PROD = 'app/SHOW_POPUP_WARN_IMPORT_PROD',
}

export const show_spinner = (value: ISpinnerType): IAction => ({ type: AppActionTypes.SHOW_SPINNER, value });
export const set_error_request = (value: any): IAction => ({ type: AppActionTypes.ERROR_REQUEST, value });
export const set_last_action = (value: string): IAction => ({ type: AppActionTypes.LAST_ACTION, value });
export const show_popup_warn_import_prod = (value: boolean): IAction =>
  ({ type: AppActionTypes.SHOW_POPUP_WARN_IMPORT_PROD, value });
