
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeCLRLR1kDyd1kq47TrGbUURfRNEOK2f0",
  authDomain: "mashamir2-d37f9.firebaseapp.com",
  databaseURL: "https://mashamir2-d37f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mashamir2-d37f9",
  storageBucket: "mashamir2-d37f9.appspot.com",
  messagingSenderId: "642679391968",
  appId: "1:642679391968:web:3d9057d9ab96379825f285"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app); 