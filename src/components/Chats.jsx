import React, {useEffect,useState,useRef} from "react";
import { useHistory } from "react-router-dom";
import { Avatar, ChatEngine } from "react-chat-engine";
import firebaseApp from "../firebase";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useAuth } from "../contexts/Notestates";
import axios from "axios";
const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading,setLoading]=useState(true);

    console.log(user,user.displayName,user.uid,user.email);

const handleLogout= async ()=>{
    firebaseApp.auth().signOut();
    history.push("/");
    
}

const getImage = async (url)=>{
    const response =await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpeg", {type: "image/jpeg"});

}

useEffect(() => {
    if(!user){
        history.push("/");
        return
    }
    axios.get("https://api.chatengine.io/users/me",{
        headers:{
            "project-id":"3db1c37a-04bd-4935-a688-caba180172b4",
            "user-name":user.email,
            "user-secret":user.uid,
            
        }
    }).then(()=>{
        setLoading(false);
    })
    .catch(()=>{
        let formdata = new FormData();
        formdata.append("username",user.email);
        formdata.append("email",user.email);
        formdata.append("secret",user.uid);
        getImage(user.imageUrl).then((avatar)=>{
            formdata.append("avatar",avatar,avatar.name);

            axios.post("https://api.chatengine.io/users",formdata,{headers:{"private-key":"c8e9b7a8-d7e0-4c64-b767-dc37d727c3e9"}}).then(()=>setLoading(false)).catch((error)=>console.log(error))
        })
    })
},[user,history])

// if (!user || loading) return "Loading...";
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab" onClick={handleLogout}>Simple Chat</div>
        <div className="logout-tab">Logout</div>
      </div>
      <ChatEngine
      height="calc(100vh - 66px)"
      projectID="3db1c37a-04bd-4935-a688-caba180172b4"
      userName={user.email}
      userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
