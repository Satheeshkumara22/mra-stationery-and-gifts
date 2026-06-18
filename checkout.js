
let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {

    total +=
    item.price * item.quantity;

});

document.getElementById(
"checkoutProductTotal"
).innerText = total;

document.getElementById(
"checkoutGrandTotal"
).innerText = total + 80;
const form =
document.getElementById(
"checkoutForm"
);

form.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const payment =
document.querySelector(
'input[name="payment"]:checked'
).value;

if(payment === "cod"){

alert(
"Order Placed Successfully!"
);

localStorage.removeItem(
"cart"
);

window.location.href =
"index.html";

}
else{

alert(
"Online Payment Coming Soon"
);

}

});