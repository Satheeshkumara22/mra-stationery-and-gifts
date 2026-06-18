import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Check login status
onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.replace("login.html");
        return;
    }

    // Get email from Firebase
    const email = user.email;

    // Short email display
    const shortEmail =
        email.length > 25
            ? email.substring(0, 25) + "..."
            : email;

    // Show email
    document.getElementById("userEmail").innerText = shortEmail;

    // Create username from email
    const username = email.split("@")[0];

    // Show username
    // Show username
document.getElementById("userName").innerText = username;

// Mobile number (temporary)
document.getElementById("userPhone").innerText =
    "Mobile Number: Not Available";

// Show Author Button Only For You
if(email === "satheeshkumar626110@gmail.com"){

    document.getElementById("authorBtn")
    .style.display = "inline-block";

}
});

// Logout button
document.getElementById("logoutBtn")
.addEventListener("click", () => {

    signOut(auth)
        .then(() => {

            localStorage.clear();

            window.location.replace("login.html");

        })
        .catch((error) => {

            console.error(error);

        });

     
});

document.getElementById("authorBtn")
.addEventListener("click", () => {

    window.location.href =
    "author.html";

});