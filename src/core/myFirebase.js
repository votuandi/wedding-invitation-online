import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase web configuration identifies this public client application. It is not
// a secret credential; Firestore Security Rules must enforce data access.
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCJMkuqGlKq2iwm_fD18rdpifLAueHeMkg",
  authDomain: "thiep-cuoi-69f4e.firebaseapp.com",
  projectId: "thiep-cuoi-69f4e",
  storageBucket: "thiep-cuoi-69f4e.appspot.com",
  messagingSenderId: "133723722373",
  appId: "1:133723722373:web:43acf6baaf8d33b1000fec",
  measurementId: "G-R4GK12QFFC"
})

export const db = getFirestore(firebaseApp);
