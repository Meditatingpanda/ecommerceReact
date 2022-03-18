// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYCD38oii0WIiQENZRrLYtdeq1i_YijTI",
  authDomain: "e-commercesite-8d3a4.firebaseapp.com",
  projectId: "e-commercesite-8d3a4",
  storageBucket: "e-commercesite-8d3a4.appspot.com",
  messagingSenderId: "243150209701",
  appId: "1:243150209701:web:a44227cc98413d6238834c",
  measurementId: "G-BQ62Q65H28",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
