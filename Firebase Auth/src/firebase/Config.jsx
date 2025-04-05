// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGxbLk1wA-HG88pOnH23eAtqDfo0eihYQ",
  authDomain: "fir-auth-f87bb.firebaseapp.com",
  projectId: "fir-auth-f87bb",
  storageBucket: "fir-auth-f87bb.firebasestorage.app",
  messagingSenderId: "415414960683",
  appId: "1:415414960683:web:e439399f1ac87fb89b606e",
  measurementId: "G-9L3RY36G49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);