// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBq-Y8gQ-lCiWBUjeXlAIv92DuPWmaO7k8",
  authDomain: "mra-stationery-and-gifts.firebaseapp.com",
  projectId: "mra-stationery-and-gifts",
  storageBucket: "mra-stationery-and-gifts.firebasestorage.app",
  messagingSenderId: "618397849843",
  appId: "1:618397849843:web:9968defc6f371d3f5d3f86",
  measurementId: "G-S8QE486P01"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);