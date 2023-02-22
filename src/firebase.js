import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFijh-siwT74LPcHIrU7dc3HSpuYK_ZLw",
  authDomain: "react-hooks-blog-11555.firebaseapp.com",
  projectId: "react-hooks-blog-11555",
  storageBucket: "react-hooks-blog-11555.appspot.com",
  messagingSenderId: "128188289109",
  appId: "1:128188289109:web:cef860cec261ccbd0284dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();