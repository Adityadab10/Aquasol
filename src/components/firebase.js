// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDemblctYkGhVVTynlY2GcV2uamet_uXKM",
  authDomain: "aquasol-4fd31.firebaseapp.com",
  projectId: "aquasol-4fd31",
  storageBucket: "aquasol-4fd31.firebasestorage.app",
  messagingSenderId: "738080952384",
  appId: "1:738080952384:web:619f3f747e6d1fa42b4fa5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);  // Firestore instance

// Add auth state observer
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export { app };