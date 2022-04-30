import { initializeApp } from "firebase/app";
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocFromAuth = async (authUser) => {
  const userDocRef = doc(db, 'users', authUser.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()){
    const {displayName, email} = authUser;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch(error){
      console.log(error);
    }
  }
  return userDocRef;
}
