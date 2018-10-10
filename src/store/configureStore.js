import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers(
  {
    places: placesReducer
  }
);

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers())
};

export default configureStore;