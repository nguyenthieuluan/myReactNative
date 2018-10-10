import {ADD_PLACE, DELETE_PLACE, SET_PLACE} from "./actionTypes";

export const addPlace = (placeName) => {
  return dispatch => {
    const placeData = {
      name: placeName,
    };
    fetch("https://myawesomeapp-8628a.firebaseio.com/places.json", {
      method: "POST",
      body: JSON.stringify(placeData)
  }).catch(err => console.log(err)).then(res => res.json()).then(parseRes => {
      console.log(parseRes);
    })
  }
};
// load data
export const getPlaces = () => {
  return dispatch => {
    fetch("https://myawesomeapp-8628a.firebaseio.com/places.json")
      .catch( err => alert('Có lỗi xảy ra, vui lòng tải lại'))
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            key: key
          })
        }
        dispatch(setPlaces(places));
      })
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