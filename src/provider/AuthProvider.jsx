import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../components/firebase/firebase.config";

export const AuthContext =createContext();
const auth = getAuth(app);



 const AuthProvider = ({ children  }) => {
    // const [user, setUser] =useState({
    //     name:"Shanta",
    //     email:"Shanta@gmail.com",
    // })

    const [user, setUser] =useState(null);

    const [loading, setLoading] =useState(true);
    // console.log(loading, user)

    const createNewUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
    const userLogin =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    //update User profile
    const updateUserProfile =(updatedData)=>{
        return updateProfile(auth.currentUser , updatedData)

    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin, 
        loading,  
        updateUserProfile  
    }


    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })

      return () =>{
        unsubscribe();
      }

    },[])
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;