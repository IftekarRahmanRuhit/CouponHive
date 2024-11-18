import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import {  useEffect, useState } from "react"
import {  createContext } from "react"
import { auth } from "../Firebase/Firebase.init"
import toast from "react-hot-toast"



export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)

    const [loading,setLoading] = useState(true)




    const createUser = (email,password)=>{
        setLoading(true)
        toast.success('Successfully Account Created!');
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signINUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, provider)
    }

    const signOutUser  = () => {

        setLoading(true)
        return signOut(auth);
        

    }

    useEffect(()=>{

       const unSubscribe = onAuthStateChanged(auth, currentUser =>{

                console.log('currently user loged', currentUser)
                setUser(currentUser)
                setLoading(false)
      
        })

        return()=>{
            unSubscribe();
        }



    },[])




    const authInfo = {
        name: 'Ruhit',
        createUser,
        signINUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    }







  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
