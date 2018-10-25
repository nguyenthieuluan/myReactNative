import {SET_ADMIN, SET_PLACE, SET_USER} from "./actionTypes";
import {firebaseApp} from "../config/FirebaseConfig";
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
  } from './actionTypes';

 import startMainTabs from '../screens/MainTabs/startMainTabs';

export const loginUser = ( email, password ) => {
    // using Redux Thunk, action creator now returns a function
    return (dispatch) => {
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(
                user => loginUserSuccess(dispatch, user)
            )
        .catch((error) => {
          firebaseApp.auth().createUserWithEmailAndPassword(email, password)
             .then(user =>loginUserSuccess(dispatch, user))
             .catch(() => loginUserFail(dispatch))
        })
    }
}
const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
      type: LOGIN_USER_SUCCESS, 
      payload: user 
  })
  startMainTabs();
}