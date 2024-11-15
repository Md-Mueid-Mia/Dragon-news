import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    

    const createNewUser = (email, password)=>{
        // API call to create a new user
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = ()=>{
        console.log('log out');
        return signOut(auth)
    }

    const authInfo={
        user,
        setUser,
        createNewUser,
        LogOut,
        userLogin,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;