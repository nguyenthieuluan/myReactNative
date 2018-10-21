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

// add location
export const setCoordinate = (latitude, longitude, latitudeDelta, longitudeDelta) => {
  alert(latitude)
  return (dispatch, setPlaces) => {
    //const account = setPlaces;
    //console.log(JSON.stringify(account))
    //firebaseApp.database().ref
    alert(latitude)
  }
};

export function someAction() {
  return (dispatch, getState) => {
    const {items} = getState().otherReducer;

    dispatch(anotherAction(items));
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE 
        })
        Actions.pop()
      })
  }
}
