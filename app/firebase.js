// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore' // Correct import for Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjxv-JyDdPSL5klElaI9HpKsmEd0Mhxfg',
  authDomain: 'ideakiosk-5ba81.firebaseapp.com',
  projectId: 'ideakiosk-5ba81',
  storageBucket: 'ideakiosk-5ba81.appspot.com',
  messagingSenderId: '922132324657',
  appId: '1:922132324657:web:e1c747f02c0e1449615010',
  measurementId: 'G-KQ8DD6WPEB'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)

// Export the initialized app and db
export { app, db }
