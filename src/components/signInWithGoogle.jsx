// src/signInWithGoogle.js
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

// Initialize auth and provider
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// Sign in with Google function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // The auth state listener in SignUpPage will handle the state update
    return user;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    alert('Google Sign-In Failed. Please try again.');
    return null;
  }
};
