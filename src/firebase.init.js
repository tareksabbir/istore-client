// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFvOodKL5NY5mGClF4s05led0ezt997Dg",
    authDomain: "istore-7d9e5.firebaseapp.com",
    projectId: "istore-7d9e5",
    storageBucket: "istore-7d9e5.appspot.com",
    messagingSenderId: "2148775491",
    appId: "1:2148775491:web:4f094dcf9cf759b7b146f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;