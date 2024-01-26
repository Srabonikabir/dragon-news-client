import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [ user, setUser] = useState (null);

const ProviderLogin = (Provider) =>{
    return signInWithPopup (auth, Provider);
}
 useEffect (() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log ('inside auth state change', currentUser);
   setUser(currentUser)
   
    });
    return () => {
        unsubscribe();
    }

 }, [])




const authInfo = { user ,ProviderLogin }


    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;