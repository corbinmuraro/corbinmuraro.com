import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBMZmAm2mnnQeIBT3PgUBthREz3gQn9Zkg",
  authDomain: "guestbook-cf44e.firebaseapp.com",
  databaseURL: "https://guestbook-cf44e.firebaseio.com",
  projectId: "guestbook-cf44e",
  storageBucket: "guestbook-cf44e.appspot.com",
  messagingSenderId: "307670791323"
};
firebase.initializeApp(config);

export default firebase;
