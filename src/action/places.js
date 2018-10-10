import {ADD_PLACE, DELETE_PLACE, SET_PLACE} from "./actionTypes";
import {firebaseApp} from "../config/FirebaseConfig";

export const addPlace = (placeName) => {
  // return dispatch => {
  //   const placeData = {
  //     name: placeName,
  //   };
  //   fetch("https://myawesomeapp-8628a.firebaseio.com/places.json", {
  //     method: "POST",
  //     body: JSON.stringify(placeData)
  //   })
  //     .catch(err => console.log(err))
  //     .then(res => res.json())
  //     .then(parseRes => {console.log(parseRes);
  //   })
  // }
  return dispatch => {
    const placeData = {
      name: placeName
    };
    firebaseApp.database().ref('places').push(placeData);
  }
};
// load data
export const getPlaces = () => {
  // return dispatch => {
  //   fetch("https://myawesomeapp-8628a.firebaseio.com/places.json")
  //     .catch( err => alert('Có lỗi xảy ra, vui lòng tải lại'))
  //     .then(res => res.json())
  //     .then(parsedRes => {
  //       const places = [];
  //       for (let key in parsedRes) {
  //         places.push({
  //           ...parsedRes[key],
  //           key: key
  //         })
  //       }
  //       dispatch(setPlaces(places));
  //     })
  // }
  return dispatch => {
    firebaseApp.database().ref('places').on('value', (childSnappshot) => {
      const places = [];
      childSnappshot.forEach((doc) =>{
        places.push({
          key: doc.key,
          name: doc.toJSON().name
        })
      });
      // places.push({
      //   name: dataSnapshot.val().name,
      //   key: dataSnapshot.key
      // });
      //alert(places[0].name);
      dispatch(setPlaces(places));
    }, function (error) { })
  }
};

export const setPlaces = places => {
  return {
    type: SET_PLACE,
    places: places
  }
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  }
};
// export const selectPlace = (key) => {
//   return {
//     type: SELECT_PLACE,
//     key: key
//   }
// };
// export const deselectPlace = () => {
//   return {
//     type: DESELECT_PLACE
//   }
// };