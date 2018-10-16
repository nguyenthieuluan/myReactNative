import {SET_PLACE} from '../../action/actionTypes';

const initialState = {
  places: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        places: action.places
      };
    default:
      return state;
  }
};

export default reducer;