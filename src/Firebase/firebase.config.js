// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67iR2XXqBA6sdzsiv-UZnoe6q9S3Xdas",
  authDomain: "winter-clothing-donation-cbfda.firebaseapp.com",
  projectId: "winter-clothing-donation-cbfda",
  storageBucket: "winter-clothing-donation-cbfda.firebasestorage.app",
  messagingSenderId: "584397398009",
  appId: "1:584397398009:web:1fa0358110c41b678fa728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;