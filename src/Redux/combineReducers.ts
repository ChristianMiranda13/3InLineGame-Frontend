import { combineReducers } from 'redux';

// Reducers
import app from '../Reducers/App/AppReducer';
export default combineReducers<IRootState>({
  app,
});
