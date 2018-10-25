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
export const setCoordinate = (latitude, longitude, latitudeDelta, longitudeDelta, adminKey, userKey) => {
  return (dispatch, getState) => {
    const newCoordinate = {  
      latitude: latitude, 
      longitude: longitude,
      latitudeDelta, latitudeDelta,
      longitudeDelta, longitudeDelta
    };
    firebaseApp.database().ref('users').child(adminKey).child('employees').child(userKey)
    .update({coordinate: newCoordinate})
  }
};

// change status
export const changeStatus = (status, adminKey, userKey) => {
  return (dispatch, getState) => {
    const newStatus = status;
    //alert(status)
    firebaseApp.database().ref('users').child(adminKey).child('employees').child(userKey)
    .update({status: newStatus})
  }
};

// get employees
export const employeesFetch = () => {
  const { currentUser } = firebaseApp.auth()

  return (dispatch) => {
    firebaseApp.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {  
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}