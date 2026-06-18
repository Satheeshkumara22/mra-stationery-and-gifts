import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    const profileLink = document.getElementById("profileLink");

    if(user){

        profileLink.innerHTML =
        `
        <img src="loidn.PNG" alt="Profile">
        <span>${user.email}</span>
        `;

        localStorage.setItem("userEmail", user.email);

    }else{

        profileLink.innerHTML =
        `
        <img src="loidn.PNG" alt="Login">
        <span>Login</span>
        `;

    }

});