// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL7Aqy1DZcgkPHz3Nj6pjsVleDrQh6pw4",
  authDomain: "netflixgpt-0007.firebaseapp.com",
  projectId: "netflixgpt-0007",
  storageBucket: "netflixgpt-0007.appspot.com",
  messagingSenderId: "50083112459",
  appId: "1:50083112459:web:a6538fca0326fc06ef090e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
