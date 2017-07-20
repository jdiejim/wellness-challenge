import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer
})
