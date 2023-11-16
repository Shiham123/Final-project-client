import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../firebase/firebase.config.js';
import useAxiosPublic from '../Hooks/useAxiosPublic.jsx';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUserEmailPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const signInGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(globalAuth, googleProvider);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(globalAuth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic
          .post('jwt', userInfo)
          .then((response) => {
            if (response.data) {
              localStorage.setItem('access-token', response.data);
            }
          })
          .catch((error) => console.log(error));
      } else {
        localStorage.removeItem('access-token');
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const info = {
    user,
    isLoading,
    createUserEmailPassword,
    loginEmailPassword,
    signInGoogle,
    logOut,
    profileUpdate,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
