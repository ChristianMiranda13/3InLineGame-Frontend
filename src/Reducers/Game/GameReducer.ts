// Libraries
import { Reducer } from 'redux';

// Constants
import { GameActionTypes } from './GameActions';

export const initialState: IGameReducerType = {
  games: [],
};

const reducer: Reducer<IGameReducerType, IAction> = (state = initialState, action: IAction): IGameReducerType => {
  switch (action.type) {
    case GameActionTypes.GET_GAMES:
      return {
        ...state,
        games: action.value.games,
      };
    default:
      return state;
  }
};

export default reducer;
