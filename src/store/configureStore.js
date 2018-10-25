import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places';
import authReducer from './reducers/AuthReducer';
import EmployeeReducer from './reducers/EmployeeReducer';

const rootReducer = combineReducers(
  {
    places: placesReducer,
    auth: authReducer,
    employees: EmployeeReducer 
  }
);

//let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
};

export default configureStore;