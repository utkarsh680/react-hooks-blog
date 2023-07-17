
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2KSybtqkJF4WxNW-RzfDO8lrx-3zJZYo",
  authDomain: "react-hooks-17483.firebaseapp.com",
  projectId: "react-hooks-17483",
  storageBucket: "react-hooks-17483.appspot.com",
  messagingSenderId: "95555231411",
  appId: "1:95555231411:web:d49ba3a14cc6789ff45ac6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  const firestore = firebase.firestore();