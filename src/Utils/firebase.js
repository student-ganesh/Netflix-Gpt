// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDDpekeg9qsOsCkVF8Bt9izNCXrzgzMTA",
  authDomain: "netflixgpt-481f0.firebaseapp.com",
  projectId: "netflixgpt-481f0",
  storageBucket: "netflixgpt-481f0.firebasestorage.app",
  messagingSenderId: "179430499669",
  appId: "1:179430499669:web:d9fc93514908e49719bbdc",
  measurementId: "G-NPMJP01VDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
