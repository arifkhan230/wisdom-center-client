// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOzJtYqHGImgR0OBVnBWpA4VYwYmrJ98",
  authDomain: "wisdom-center-407db.firebaseapp.com",
  projectId: "wisdom-center-407db",
  storageBucket: "wisdom-center-407db.appspot.com",
  messagingSenderId: "947350788474",
  appId: "1:947350788474:web:d343ebf9e01fa0748bdec3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;