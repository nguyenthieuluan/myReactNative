import {
  EMPLOYEE_SAVE_SUCCEESS,
  EMPLOYEES_FETCH_SUCCESS,
  SET_ADMIN,
  SET_EMPLOYEES,
  SET_PLACE,
  SET_USER
} from "./actionTypes";
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
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
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
export const getEmployees = () => {
  const { currentUser } = firebaseApp.auth()

  return (dispatch) => {
    firebaseApp.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', childSnappshot => {
        const employees = [];
        childSnappshot.forEach(doc=>{
          employees.push({
            key: doc.key,
            name: doc.toJSON().name,
            email: doc.toJSON().phone,
            password: doc.toJSON().shift,
            status: doc.toJSON().status,
            coordinate: doc.toJSON().coordinate
          })
        });
        dispatch(setEmployees(employees));
      }, function (error) { })
  }
};
export const setEmployees = employees => {
  return {
    type: SET_EMPLOYEES,
    employees: employees
  }
};



// create employee
export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // .then(() => {
      //   dispatch({
      //     type: EMPLOYEE_CREATE 
      //   })
      // })
  }
};

// update employee
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCEESS })
        Actions.pop()
      })
  }
};

// delete employee
export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop()
      })
  }
};