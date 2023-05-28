// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeqC6UGRt2X7gLx2kKZ5zbCjeny1dwlms",
  authDomain: "chatapp-fa4f8.firebaseapp.com",
  projectId: "chatapp-fa4f8",
  storageBucket: "chatapp-fa4f8.appspot.com",
  messagingSenderId: "918768523519",
  appId: "1:918768523519:web:93eea5be909422219d54ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
