import {EMPLOYEES_FETCH_SUCCESS, SET_PLACE, SET_EMPLOYEES} from '../../action/actionTypes';
  
  const INITIAL_STATE = {
    employees: []
  };
  
  export default  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMPLOYEES_FETCH_SUCCESS:
        return action.employees;
      case SET_EMPLOYEES:
        return {
          ...state,
          employees: action.employees
        };
      default:
        return state 
    }
  }