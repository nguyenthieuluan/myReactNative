import {ADD_PLACE, DELETE_PLACE, SET_PLACE} from '../../action/actionTypes';

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
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;