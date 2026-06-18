import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )

   .then((userCredential) => {

    const user = userCredential.user;

    // SAVE CURRENT LOGIN EMAIL
    localStorage.setItem(
        "currentUserEmail",
        user.email
    );

    console.log("Login Successful");
    alert("Login Successful!");

    if(user.email === "satheeshkumar626110@gmail.com"){

        window.location.href = "./author.html";

    }else{

        window.location.href = "./index.html";

    }

})
    .catch((error) => {

    console.log(error.code);
    console.log(error.message);

    alert(error.code);

});
});