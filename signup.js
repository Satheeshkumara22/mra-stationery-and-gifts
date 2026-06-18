import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

console.log("signup.js loaded");

const signupForm = document.getElementById("signupForm");

console.log(signupForm);

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    })

    .catch((error) => {

        console.error(error);
        alert(error.message);

    });

});