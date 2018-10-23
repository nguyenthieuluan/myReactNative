import {SET_ADMIN, SET_PLACE, SET_USER} from "./actionTypes";
import {firebaseApp} from "../config/FirebaseConfig";
import configureStore from "../store/configureStore";
const store = configureStore();

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

// get active user
export const getUser = (user) => {
  return dispatch => {
      dispatch(setUser(user));
  }
};
export const setUser = user => {
  return {
    type: SET_USER,
    user: user
  }
};

// get manager
export const getAdmin = () => {
  return dispatch => {
    dispatch(setAdmin(admin));
}
};
export const setAdmin = admin => {
  return {
    type: SET_ADMIN,
    admin: admin
  }
};


// add location
export const setCoordinate = (latitude, longitude, latitudeDelta, longitudeDelta) => {
  return (dispatch, getState) => {

    const state = store.getState().places.places.length;

    alert(JSON.stringify(state));

    //alert()
    //const account = setPlaces;
    //console.log(JSON.stringify(account))
    //firebaseApp.database().ref
    //alert(latitude)
  }
};

