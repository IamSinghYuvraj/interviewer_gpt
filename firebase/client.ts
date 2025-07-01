import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnAt5Jg5UZBmdOxBBD2TC5aXm2eMUEFzg",
  authDomain: "ai-interview-51205.firebaseapp.com",
  projectId: "ai-interview-51205",
  storageBucket: "ai-interview-51205.firebasestorage.app",
  messagingSenderId: "893810571568",
  appId: "1:893810571568:web:efe9e86aa96a30ba81f0f5",
  measurementId: "G-NRZ4YHV533"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);