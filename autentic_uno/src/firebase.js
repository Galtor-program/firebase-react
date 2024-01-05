
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


//configuracion inicial de firebase
const firebaseConfig = {
  apiKey:  "AIzaSyAqdfg_sMBWe7uI4jr0dxiqzpBFrDohU0s",
  authDomain: "autentic-91b95.firebaseapp.com",
  projectId: "autentic-91b95",
  storageBucket: "autentic-91b95.appspot.com",
  messagingSenderId: "956158323217",
  appId: "1:956158323217:web:cf0f679c0fd91a2712dfb0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
//exportacion de fireStore
export const database = getFirestore(app);
export const storage = getStorage(app);

