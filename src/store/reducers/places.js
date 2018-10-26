import { SET_ADMIN, SET_PLACE, SET_USER } from '../../action/actionTypes';

const initialState = {
  places: [],
  user: [],
  admin: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        places: action.places
      };
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_ADMIN:
      return {
        ...state,
        admin: action.admin
      };
    default:
      return state;
  }
};

export default reducer;