import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCOuKeF7NnOV7Ua9lpzaj6emAcfF3Dr-x4",
  authDomain: "authapp-ee524.firebaseapp.com",
  projectId: "authapp-ee524",
  storageBucket: "authapp-ee524.appspot.com",
  messagingSenderId: "686888439951",
  appId: "1:686888439951:web:f342991ab6a46a2999a0fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();