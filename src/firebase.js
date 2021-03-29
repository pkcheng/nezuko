import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMV_Xp1JAasQYwBEqLAlexJZwnorpYrg0",
  authDomain: "nezuko-8c1e7.firebaseapp.com",
  projectId: "nezuko-8c1e7",
  storageBucket: "nezuko-8c1e7.appspot.com",
  messagingSenderId: "209903574596",
  appId: "1:209903574596:web:983421ce65e31677b9a611",
  measurementId: "G-CW3F77RG4H",
});

export const auth = app.auth();

export const db = firebase.firestore();

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
};

export const signup = async (email, password) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

export const signin = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export default app;
