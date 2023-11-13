import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../firebase/firebase.config.js';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const logOut = () => {
    setIsLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    user,
    isLoading,
    createUserEmailPassword,
    loginEmailPassword,
    signInGoogle,
    logOut,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
