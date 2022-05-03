import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFB_ljf-NPaKKkXDEXHaQB9Vc2zny72UI",
  authDomain: "food-swipe-b634e.firebaseapp.com",
  projectId: "food-swipe-b634e",
  storageBucket: "food-swipe-b634e.appspot.com",
  messagingSenderId: "306710812377",
  appId: "1:306710812377:web:4cc218fb38ad9e3d87d0c8",
  measurementId: "G-EQ5SH9EFCY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
