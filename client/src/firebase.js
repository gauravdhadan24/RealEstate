// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAELgpzz7bug7pYujQ4EdzVkFWqS-XTj48",
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-245.firebaseapp.com",
  projectId: "real-estate-245",
  storageBucket: "real-estate-245.appspot.com",
  messagingSenderId: "281103781865",
  appId: "1:281103781865:web:6a04c75a7c72997df5c578"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);