import { auth } from "./firebase.js";

import {
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    signOut(auth)

    .then(() => {

        alert("Logged Out Successfully");

        window.location.href = "login.html";

    })
   
    .catch((error) => {

        console.log(error);

    });

    document
.getElementById("authorBtn")
.addEventListener("click",()=>{

    window.location.href =
    "author.html";

});

});
