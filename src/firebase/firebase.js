import  firebase from "firebase/app";
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyAxuXqy3iUm6uzQXVOkVOk4hNzFlKiLQS8",
    authDomain: "site-7e70a.firebaseapp.com",
    databaseURL: "https://site-7e70a-default-rtdb.firebaseio.com",
    projectId: "site-7e70a",
    storageBucket: "site-7e70a.appspot.com",
    messagingSenderId: "284527635597",
    appId: "1:284527635597:web:eff8d63a13f20745ed06c4"
  };
  // Initialize Firebase
function initFirebase() {
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
initFirebase();
// const fireDb = firebase.initializeApp(firebaseConfig);
// fireDb.database().ref()
  export {firebase};