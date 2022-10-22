import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKW5pCOXM1TklMi6Dgj5QRwc6o2YmogiE",
  authDomain: "shikharbb-219a6.firebaseapp.com",
  projectId: "shikharbb-219a6",
  storageBucket: "shikharbb-219a6.appspot.com",
  messagingSenderId: "556628415190",
  appId: "1:556628415190:web:82dd4bfe2de7463e156f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)