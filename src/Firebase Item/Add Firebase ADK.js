 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iHsnZ7nGRBR4_T8UjE0SfTYb_xhqvic",
  authDomain: "react-authentication-pri-a2e93.firebaseapp.com",
  projectId: "react-authentication-pri-a2e93",
  storageBucket: "react-authentication-pri-a2e93.firebasestorage.app",
  messagingSenderId: "1057576439976",
  appId: "1:1057576439976:web:5c859cf46fd30d8ac3f29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);