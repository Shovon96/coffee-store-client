// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC867WT0KL5Yw47bWFYinJ_3bLawzqSTRM",
  authDomain: "coffee-store-252be.firebaseapp.com",
  projectId: "coffee-store-252be",
  storageBucket: "coffee-store-252be.appspot.com",
  messagingSenderId: "1000928867984",
  appId: "1:1000928867984:web:63f244d36fb207cffdca15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;