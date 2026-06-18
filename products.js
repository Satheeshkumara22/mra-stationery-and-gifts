if(!localStorage.getItem("products")){

    localStorage.setItem(
        "products",
        JSON.stringify([
          
    // PENS
    {
        name: "Reynolds Pen",
        price: 10,
        image: "71-RnoDO2FL._SL1500_.jpg"
    },

    {
        name: "Cello Pen",
        price: 10,
        image: "cellp.PNG"
    },

    {
        name: "Black Pen",
        price: 10,
        image: "blackpen.PNG"
    },

    {
        name: "Hero Pen",
        price: 60,
        image: "hero.jpg"
    },

    {
        name: "Ink Pen 1",
        price: 25,
        image: "pen1.webp"
    },

    {
        name: "Ink Pen 2",
        price: 40,
        image: "pen2.webp"
    },

    {
        name: "Ink Pen 3",
        price: 30,
        image: "pen3.PNG"
    },

    {
        name: "Tank Pen 1",
        price: 70,
        image: "pen4.PNG"
    },

    {
        name: "Pen 4",
        price: 40,
        image: "pen5.jpg"
    },

    {
        name: "Needle Pencil 1",
        price: 15,
        image: "needle pen1.PNG"
    },

    {
        name: "Needle Pencil 2",
        price: 40,
        image: "needle2.jpg"
    },

    {
        name: "Needle Pencil 3",
        price: 20,
        image: "needle3.jpg"
    },

    // NOTEBOOKS
    {
        name: "Classmate Notebook",
        price: 50,
        image: "classmate-school-notebook-500x500.webp"
    },

    {
        name: "Four Lines Note",
        price: 30,
        image: "4lines.webp"
    },

    {
        name: "Two Lines Notebook",
        price: 25,
        image: "2lines.webp"
    },

    {
        name: "Drawing Book",
        price: 40,
        image: "drawo.webp"
    },

    // GAMES
    {
        name: "Chess Board",
        price: 60,
        image: "chess.jpg"
    },

    {
        name: "Carrom Coins",
        price: 55,
        image: "carromcoin.PNG"
    },

    {
        name: "Businessman",
        price: 155,
        image: "businessman.PNG"
    },

    {
        name: "Ludo Board",
        price: 150,
        image: "ludo.webp"
    },

    {
        name: "Rubber Ball",
        price: 30,
        image: "rubberball.PNG"
    },

    {
        name: "Tennis Ball",
        price: 30,
        image: "Tennisball.PNG"
    },

    {
        name: "Badminton Ball",
        price: 12,
        image: "settlk.webp"
    },

    {
        name: "Naruto Card",
        price: 10,
        image: "naruto.webp"
    },

    // GIFTS
    {
        name: "Murugan Statue",
        price: 60,
        image: "murugan.jpg"
    },

    {
        name: "Clay",
        price: 5,
        image: "CLAY.PNG"
    },

    {
        name: "Vinayagar Statue",
        price: 50,
        image: "vinayagar.jpg"
    },

    {
        name: "Perumal Statue",
        price: 160,
        image: "perumal.webp"
    },

    {
        name: "Sivalingam (4 Colors)",
        price: 90,
        image: "sivan.PNG"
    },

    {
        name: "Murugar Vel",
        price: 60,
        image: "murugarvel.PNG"
    },

    {
        name: "Couples Gift",
        price: 120,
        image: "couple.webp"
    },

    {
        name: "Car Dashboard Toy",
        price: 160,
        image: "boat.PNG"
    },

    // OFFICE PRODUCTS
    {
        name: "Stapler",
        price: 150,
        image: "bigstap.PNG"
    },

    {
        name: "Mini Stapler",
        price: 80,
        image: "ministab.webp"
    },

    {
        name: "Stapler Pin",
        price: 10,
        image: "pin.jpg"
    },

    {
        name: "Courier Cover",
        price: 12,
        image: "couriercover.jpg"
    },

    {
        name: "Fevi Quick",
        price: 5,
        image: "fevi-quick-glue-500x500.webp"
    },

    {
        name: "Fevi Stick",
        price: 5,
        image: "fevistick.webp"
    },

    {
        name: "Ink Bottle",
        price: 35,
        image: "ink.jpg"
    },

    {
     name: "Marker (10 Colors)",
        price: 100,
        image: "marker.webp"
    }


        ])
    );

}



const products =
JSON.parse(localStorage.getItem("products")) || [];

 
displayProducts();

function displayProducts(){

    const container =
    document.getElementById("product-container");

    if(!container) return;

    container.innerHTML = "";

    products.forEach((product,index)=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="images/${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${index})">
                Add To Cart
            </button>

        </div>

        `;

    });

}

function addToCart(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
    ...products[index],
    quantity: 1
});

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    const buttons =
    document.querySelectorAll(".product-card button");

    buttons[index].innerHTML = "✓ Added";

    buttons[index].style.background = "#16a34a";

    buttons[index].disabled = true;
}

