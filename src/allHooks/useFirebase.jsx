import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const GoogleProvider = new GoogleAuthProvider();

  const SignInUsingGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };


  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth , (user)=> {
       console.log(user);
         if(user){
              
             setUser(user)
         } else{
             setUser({})
         }
         setIsLoading(false)
    })
     return ()=> unsubscribe()
},[])

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     }
  //   });
  // }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    setUser,
    setError,
    SignInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
