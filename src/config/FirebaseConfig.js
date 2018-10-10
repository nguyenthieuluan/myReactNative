import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB87hMqpPNJVLD2gLeAMND9k_l6oCdBZE4",
  authDomain: "myawesomeapp-8628a.firebaseapp.com",
  databaseURL: "https://myawesomeapp-8628a.firebaseio.com",
  projectId: "myawesomeapp-8628a",
  storageBucket: "myawesomeapp-8628a.appspot.com",
  messagingSenderId: "4058864788"
};
export const firebaseApp = firebase.initializeApp(config);
