// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";
// dotenv.config();




const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-56a1a.firebaseapp.com",
  projectId: "mern-estate-56a1a",
  storageBucket: "mern-estate-56a1a.appspot.com",
  messagingSenderId: "908878954200",
  appId: "1:908878954200:web:09e5a360c848ddfd40e1ad"
};


// Initialize Firebase
export  const app = initializeApp(firebaseConfig);