import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import user from './user';
import selection from './selection';
import services from './services';
import product from './product';
import request from './request';

const reducers = combineReducers({
  user,
  selection,
  services,
  product,
  request,
  router: routerReducer
});

export default reducers;
