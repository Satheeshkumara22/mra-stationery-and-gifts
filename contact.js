// ===== AUTHOR EMAIL =====
const AUTHOR_EMAIL = "satheeshkumar626110@gmail.com";

// ===== LOAD SAVED DATA =====
window.addEventListener("load", () => {

    const savedData =
    JSON.parse(localStorage.getItem("ownerDetails"));

    if(savedData){

        document.getElementById("ownerName").innerText =
        savedData.name;

        document.getElementById("ownerMobile").innerText =
        savedData.mobile;

        document.getElementById("ownerEmail").innerText =
        savedData.email;

        document.getElementById("ownerAddress").innerText =
        savedData.address;

        document.getElementById("ownerPhoto").src =
        savedData.photo;
    }

    checkAuthor();
});

// ===== CHECK AUTHOR =====
function checkAuthor(){

    const currentUserEmail =
    localStorage.getItem("currentUserEmail");

    if(currentUserEmail === AUTHOR_EMAIL){

        document.getElementById("editBtn").style.display =
        "inline-block";
    }
}

// ===== OPEN EDIT PANEL =====
document.getElementById("editBtn")
.addEventListener("click",()=>{

    document.getElementById("editPanel").style.display =
    "block";

    document.getElementById("editName").value =
    document.getElementById("ownerName").innerText;

    document.getElementById("editMobile").value =
    document.getElementById("ownerMobile").innerText;

    document.getElementById("editEmail").value =
    document.getElementById("ownerEmail").innerText;

    document.getElementById("editAddress").value =
    document.getElementById("ownerAddress").innerText;
});

// ===== SAVE PROFILE =====
document.getElementById("saveProfileBtn")
.addEventListener("click",()=>{

    const name =
    document.getElementById("editName").value;

    const mobile =
    document.getElementById("editMobile").value;

    const email =
    document.getElementById("editEmail").value;

    const address =
    document.getElementById("editAddress").value;

    const photoFile =
    document.getElementById("editPhoto").files[0];

    if(photoFile){

        const reader = new FileReader();

        reader.onload = function(e){

            saveProfile(
                name,
                mobile,
                email,
                address,
                e.target.result
            );

        };

        reader.readAsDataURL(photoFile);

    }else{

        const currentPhoto =
        document.getElementById("ownerPhoto").src;

        saveProfile(
            name,
            mobile,
            email,
            address,
            currentPhoto
        );
    }
});

function saveProfile(
    name,
    mobile,
    email,
    address,
    photo
){

    const data = {

        name,
        mobile,
        email,
        address,
        photo

    };

    localStorage.setItem(
        "ownerDetails",
        JSON.stringify(data)
    );

    location.reload();
}