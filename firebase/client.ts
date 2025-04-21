// import { initializeApp, getApp, getApps } from "firebase/app";
//  import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDH5RVpgI72b-bP1mZ1X6JdtdHfpdv3eB8",
//   authDomain: "prepwise-22d7d.firebaseapp.com",
//   projectId: "prepwise-22d7d",
//   storageBucket: "prepwise-22d7d.firebasestorage.app",
//   messagingSenderId: "74831932553",
//   appId: "1:74831932553:web:c612d12cbba4c9085aea58",
//   measurementId: "G-VJTHM4MKJ2"
// };

// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

//  export const auth = getAuth(app);
//  export const db = getFirestore(app)

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs9EynFO1oT_-aIYaxywZwoVaeBZYy568",
  authDomain: "aiinterview-a48e5.firebaseapp.com",
  projectId: "aiinterview-a48e5",
  storageBucket: "aiinterview-a48e5.firebasestorage.app",
  messagingSenderId: "576235036054",
  appId: "1:576235036054:web:f582fca35347ae89c791b7",
  measurementId: "G-GTC2G9HL5V",
};
// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
