import './App.css';
import AppRouter from "./components/AppRouter/AppRouter"
import Header from "./components/Header/Header"
import React, {useEffect, useState} from 'react';
import { auth } from './utils/firebase-config'
import { signInWithEmailAndPassword  } from "firebase/auth";

function App() {
 /* useEffect(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
  }, [])*/
  return (
    <div className="App">
      <Header />
      <AppRouter/>
    </div>
  );
}

export default App;
