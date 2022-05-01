import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbIK3n6JAu5K-PdgTzekg_FP60TZZ8Hfo",
  authDomain: "crown-clothing-db-33929.firebaseapp.com",
  projectId: "crown-clothing-db-33929",
  storageBucket: "crown-clothing-db-33929.appspot.com",
  messagingSenderId: "40531026286",
  appId: "1:40531026286:web:7528f89ac9a41206d6617f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const createUserDocFromAuth = async (
  authUser,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", authUser.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
export const createAuthUserFromEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
