// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtwCytvdJ63HDmRGK70gzDPrGtqq7LJWg",
    authDomain: "iberofinantial.firebaseapp.com",
    projectId: "iberofinantial",
    storageBucket: "iberofinantial.appspot.com",
    messagingSenderId: "104158522674",
    appId: "1:104158522674:web:c4627963832bea064bfb2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);