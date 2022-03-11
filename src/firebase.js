import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdaj6Apj-8bzYLUAPdiZ5LWL9Dk4PB_W0",
    authDomain: "simple-chat-app-78c92.firebaseapp.com",
    projectId: "simple-chat-app-78c92",
    storageBucket: "simple-chat-app-78c92.appspot.com",
    messagingSenderId: "688931777807",
    appId: "1:688931777807:web:33d7c2da0809c3f9d6627a",
    measurementId: "G-VSJHMSJRML"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;