import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import history from './services/history';

const configureStore = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
)

export default configureStore;
