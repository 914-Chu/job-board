// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuMm18QWyZ2D6cvJgUIwNhmvt-1eURzEk",
  authDomain: "uiuc-job-board.firebaseapp.com",
  projectId: "uiuc-job-board",
  storageBucket: "uiuc-job-board.appspot.com",
  messagingSenderId: "157734556908",
  appId: "1:157734556908:web:fb3eb6937d84b75a9441c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
