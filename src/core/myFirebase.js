// import Firebase from 'firebase'
// let config = {
//   apiKey: "AIzaSyCJMkuqGlKq2iwm_fD18rdpifLAueHeMkg",
//   authDomain: "thiep-cuoi-69f4e.firebaseapp.com",
//   projectId: "thiep-cuoi-69f4e",
//   storageBucket: "thiep-cuoi-69f4e.appspot.com",
//   messagingSenderId: "133723722373",
//   appId: "1:133723722373:web:43acf6baaf8d33b1000fec",
//   measurementId: "G-R4GK12QFFC"
// };

// let app = Firebase.initializeApp(config)
// let db = app.database()
// export const dbRef = db.ref('thiep-cuoi')


import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getDatabase } from 'firebase/database'
import { getFirestore } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyCJMkuqGlKq2iwm_fD18rdpifLAueHeMkg",
  authDomain: "thiep-cuoi-69f4e.firebaseapp.com",
  projectId: "thiep-cuoi-69f4e",
  storageBucket: "thiep-cuoi-69f4e.appspot.com",
  messagingSenderId: "133723722373",
  appId: "1:133723722373:web:43acf6baaf8d33b1000fec",
  measurementId: "G-R4GK12QFFC"
})

// used for the databas refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
// export const firebaseDbRef = dbRef(db, 'thiep-cuoi')