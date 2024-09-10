import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../components/firebase/firebaseConfig";
 
 export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    console.log(user);
    // Create usere here 
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user here 

    const signWithUser = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // logout here 

    const logOut = ()=>{
        setUser(null)
        signOut(auth)
    }

 useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } 
      });

},[])

    
    const authInfo ={
        user,createUser,signWithUser,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider