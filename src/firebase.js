import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGL5oZjQ8vuF5iPIV9I3SqygbrjDFxEN8",
  authDomain: "eshop-47853.firebaseapp.com",
  projectId: "eshop-47853",
  storageBucket: "eshop-47853.appspot.com",
  messagingSenderId: "839926375467",
  appId: "1:839926375467:web:063299444b6a151acaf66e",
  measurementId: "G-MB7LV7BT4E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
