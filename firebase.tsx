// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtYIFa88sVbr4Go792A8lSoaUSnxJboFw",
  authDomain: "netflix-clone-74b25.firebaseapp.com",
  projectId: "netflix-clone-74b25",
  storageBucket: "netflix-clone-74b25.appspot.com",
  messagingSenderId: "106071832564",
  appId: "1:106071832564:web:02416afeeae4584f6beba1",
  measurementId: "G-NT08BH5C76"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }