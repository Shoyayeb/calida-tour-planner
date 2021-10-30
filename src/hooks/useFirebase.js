import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, []);
  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};
export default useFirebase;
