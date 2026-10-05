import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpRu1YXx3pL0FBhtk_P8iwOVMuKF4ZA74",
  authDomain: "challenge-consulting-ae5eb.firebaseapp.com",
  projectId: "challenge-consulting-ae5eb",
  storageBucket: "challenge-consulting-ae5eb.firebasestorage.app",
  messagingSenderId: "776690881929",
  appId: "1:776690881929:web:7fbe51e2c45db3810abd58",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
