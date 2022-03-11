import AuthContext from "./AuthContext";
import React from "react";
import firebase from "firebase";
import {createContext,useContext,useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import  firebaseApp  from "../firebase";

export const useAuth = ()=>useContext(AuthContext); 

const AuthState = (props)=>{
  
        const [loading,setLoading]=useState(false);
    const [user,setUser]  = useState(null);
    const history = useHistory()
    console.log(history.location.pathname);

    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        
           if (user) history.push("/chats");

        })
    },[user,history]);

    const value = {user};
    return(
        <AuthContext.Provider value={value}>
         {!loading && props.children}    
        </AuthContext.Provider>
    )
}

export default AuthState;