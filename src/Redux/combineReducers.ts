import { combineReducers } from 'redux';

// Reducers
import app from '../Reducers/App/AppReducer';
import game from '../Reducers/Game/GameReducer';

export default combineReducers<IRootState>({
  app,
  game,
});
