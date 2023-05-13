// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxgwPNKg9KFDILrELJ8albxvbyrI4fiw0",
  authDomain: "fyjbmcs.firebaseapp.com",
  projectId: "fyjbmcs",
  storageBucket: "fyjbmcs.appspot.com",
  messagingSenderId: "377521947312",
  appId: "1:377521947312:web:82dac0a77efb25128db175",
  measurementId: "G-E1V18GH224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
