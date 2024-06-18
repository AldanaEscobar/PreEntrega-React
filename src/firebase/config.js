import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLUmVE8RTObcDRRhl46MrXLvuaMnn5LFQ",
  authDomain: "trinidad-aldi-tienda.firebaseapp.com",
  projectId: "trinidad-aldi-tienda",
  storageBucket: "trinidad-aldi-tienda.appspot.com",
  messagingSenderId: "1040899774817",
  appId: "1:1040899774817:web:8089ccca8a45aefc824d20",
  measurementId: "G-1YF94GLK2S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);