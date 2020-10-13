// Libraries
import { Reducer } from 'redux';

// Constants
import { AppActionTypes } from './AppActions';

export const initialState: IAppReducerType = {
  spinnerValue: {
    type: 'none',
  },
  lastAction: '',
  showPopUpWarnImportProd: false,
  error: '',
};

const reducer: Reducer<IAppReducerType, IAction> = (state = initialState, action: IAction): IAppReducerType => {
  switch (action.type) {
    case AppActionTypes.SHOW_SPINNER:
      return {
        ...state,
        spinnerValue: action.value,
      };
    case AppActionTypes.LAST_ACTION:
      return {
        ...state,
        lastAction: action.value,
      };
    case AppActionTypes.ERROR_REQUEST:
      return {
        ...state,
        error: action.value,
      };

    case AppActionTypes.SHOW_POPUP_WARN_IMPORT_PROD:
      return {
        ...state,
        showPopUpWarnImportProd: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
