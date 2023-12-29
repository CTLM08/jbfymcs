import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
export const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = app.auth();
export const provider = new GoogleAuthProvider();
export const signOut = () => {
  auth.signOut();
};
export const signInWithGoogle = (navigate) => {
  auth
    .signInWithPopup(provider)
    .then(async ({ user }) => {
      if (user.uid == "VzMj9MZAW3RNFQyskyXcdQJSgDr1") {
        navigate("/admin");
      } else {
        signOut();
        navigate("/");
        alert("You are not an admin");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
