import {SET_PLACE} from "./actionTypes";
import {firebaseApp} from "../config/FirebaseConfig";

// load data
export const getPlaces = () => {

  return dispatch => {
    firebaseApp.database().ref('users').on('value', (childSnappshot) => {
      const users = [];
      childSnappshot.forEach((doc) =>{
        users.push({
          key: doc.key,
          employees: doc.toJSON().employees
        })
      });
      dispatch(setPlaces(users));
    }, function (error) { })
  }
};

export const setPlaces = places => {
  return {
    type: SET_PLACE,
    places: places
  }
};
