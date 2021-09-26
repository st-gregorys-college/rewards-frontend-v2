import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {}

const configureStore = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export default configureStore;