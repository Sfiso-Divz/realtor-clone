// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMa-bfRi9iAkWEelNtMOW4r3qfVLGsd8",
  authDomain: "realtor-clone-c72d8.firebaseapp.com",
  projectId: "realtor-clone-c72d8",
  storageBucket: "realtor-clone-c72d8.appspot.com",
  messagingSenderId: "981526849529",
  appId: "1:981526849529:web:9bb778b9a2913dcbcbff28"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const db = getFirestore()