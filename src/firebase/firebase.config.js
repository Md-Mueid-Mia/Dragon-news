// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUhkqG06a4GnkJIwTVvt9isn_mfpPM0dY",
  authDomain: "dragon-news2-28457.firebaseapp.com",
  projectId: "dragon-news2-28457",
  storageBucket: "dragon-news2-28457.firebasestorage.app",
  messagingSenderId: "121687084093",
  appId: "1:121687084093:web:a7a7c1b408b1ca7e28ee54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;