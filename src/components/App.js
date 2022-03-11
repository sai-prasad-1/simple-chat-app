import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import  {AuthProvider}  from "../contexts/AuthContext"
import AuthState from "../contexts/Notestates"

import Chats from "./Chats"
import Login from "./Login.jsx"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        {/* <AuthProvider> */}
          <AuthState>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Switch>
        {/* </AuthProvider> */}
        </AuthState>
      </Router>
    </div>
  )
}

export default App



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdaj6Apj-8bzYLUAPdiZ5LWL9Dk4PB_W0",
//   authDomain: "simple-chat-app-78c92.firebaseapp.com",
//   projectId: "simple-chat-app-78c92",
//   storageBucket: "simple-chat-app-78c92.appspot.com",
//   messagingSenderId: "688931777807",
//   appId: "1:688931777807:web:33d7c2da0809c3f9d6627a",
//   measurementId: "G-VSJHMSJRML"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);