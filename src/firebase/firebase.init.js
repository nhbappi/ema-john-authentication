
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKlk5iD40Td_4e8HgafDgJ575eAAW0WWM",
  authDomain: "ema-john-auth-51496.firebaseapp.com",
  projectId: "ema-john-auth-51496",
  storageBucket: "ema-john-auth-51496.appspot.com",
  messagingSenderId: "660885364033",
  appId: "1:660885364033:web:e6b8b4186c1a0f1cf095c0",
  measurementId: "G-WBHRSTNYQ9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
