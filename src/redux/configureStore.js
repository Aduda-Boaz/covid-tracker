import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import financialReducer from './stock/stocks';

const reducer = combineReducers({
  financialReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
