// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmNGMGmJQ4rQwFpNcnoWg7ONpzsIKf8eI",
  authDomain: "pharmatrack-95ae2.firebaseapp.com",
  projectId: "pharmatrack-95ae2",
  storageBucket: "pharmatrack-95ae2.appspot.com",
  messagingSenderId: "481018664934",
  appId: "1:481018664934:web:7924673f895c927bb1a827",
  measurementId: "G-13MPPYXP1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();
