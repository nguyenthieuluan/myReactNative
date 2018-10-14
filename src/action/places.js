import {ADD_PLACE, DELETE_PLACE, SET_PLACE} from "./actionTypes";
import {firebaseApp} from "../config/FirebaseConfig";

export const addPlace = (placeName, initialAccountBalance, note) => {
  return dispatch => {
    const walletData = {
      name: placeName,
      initialAccountBalance: initialAccountBalance,
      note: note,
      expense: [],
      income: []
    };
    firebaseApp.database().ref('places').push(walletData);
  }
};
// load data
export const getPlaces = () => {

  return dispatch => {
    firebaseApp.database().ref('places').on('value', (childSnappshot) => {
      const places = [];
      childSnappshot.forEach((doc) =>{
        places.push({
          key: doc.key,
          name: doc.toJSON().name,
          initialAccountBalance: doc.toJSON().initialAccountBalance,
          note: doc.toJSON().note,
          expense: doc.toJSON().expense,
          income: doc.toJSON().income
        })
      });
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
  return dispatch => {
    firebaseApp.database().ref('places').child(key).remove();
  }
};

export const addExpense = (key, category, expenseAmount, note) => {
  return dispatch => {
    const day = new Date().toDateString();
    const expense = {
      category: category,
      expenseAmount: expenseAmount,
      note: note,
      date: day
    };
    let preAccountBalance;
    firebaseApp.database().ref('places').child(key)
      .on('value', (snappshot) => {
        preAccountBalance = snappshot.val().initialAccountBalance;
      }, function (error) { });
    let newAccountBalance = preAccountBalance - expense.expenseAmount;
    firebaseApp.database().ref('places').child(key).child('expense').push(expense);
    firebaseApp.database().ref('places').child(key).update({initialAccountBalance: newAccountBalance});
  }
};

export const addIncome = (key, category, incomeAmount, note) => {
  return dispatch => {
    const day = new Date().toDateString();
    const income = {
      category: category,
      incomeAmount: incomeAmount,
      note: note,
      date: day
    };
    let preAccountBalance;
    firebaseApp.database().ref('places').child(key)
      .on('value', (snappshot) => {
        preAccountBalance = snappshot.val().initialAccountBalance;
      }, function (error) { });
    let newAccountBalance = Number(preAccountBalance) + Number(income.incomeAmount);
    firebaseApp.database().ref('places').child(key).child('income').push(income);
    firebaseApp.database().ref('places').child(key).update({initialAccountBalance: newAccountBalance});
  }
};



export const updateAccount = (key, note) => {
  return dispatch => {
    firebaseApp.database().ref('places').child(key).update({note: note});
  }
};