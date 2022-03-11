import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import firebase from 'firebase/app';
import firebaseApp from "../firebase";

const Login = () => {

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to SimpleChat</h2>
        <div 
        className="login-button google"
        onClick={()=>firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())} 
        >

          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
         className="login-button facebook"
          onClick={()=>firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())} 
        
        >
          <FacebookOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
