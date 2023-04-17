// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3B1gloxWwqwuDT2w-BWuBrCjU0qyDfmE",
  authDomain: "dreamhome-c33d3.firebaseapp.com",
  projectId: "dreamhome-c33d3",
  storageBucket: "dreamhome-c33d3.appspot.com",
  messagingSenderId: "657148788251",
  appId: "1:657148788251:web:9ae97d09433081289902be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
