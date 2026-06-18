// Load products from localStorage
let products =
JSON.parse(localStorage.getItem("products")) || [];

// Display Products
function displayProducts() {

    const container =
    document.getElementById("productsContainer");

    if (!container) return;

    container.innerHTML = "";

    products.forEach((product, index) => {

        container.innerHTML += `

        <div class="product-card">

            <div class="product-menu">

                <button
                class="menu-btn"
                onclick="toggleMenu(${index})">
                    ⋮
                </button>

                <div
                class="dropdown-menu"
                id="menu-${index}">

                    <input
                    type="text"
                    id="name-${index}"
                    value="${product.name}">

                    <input
                    type="number"
                    id="price-${index}"
                    value="${product.price}">

                    <input
                    type="file"
                    id="image-${index}"
                    accept="image/*">

                    <button
                    onclick="saveProductChanges(${index})">
                        Save Changes
                    </button>

                </div>

            </div>

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

        </div>

        `;
    });
}

// Open / Close Menu
function toggleMenu(index) {

    const menu =
    document.getElementById(`menu-${index}`);

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";
    }
}

// Save Product Changes
function saveProductChanges(index) {

    const newName =
    document.getElementById(`name-${index}`).value;

    const newPrice =
    document.getElementById(`price-${index}`).value;

    const imageInput =
    document.getElementById(`image-${index}`);

    products[index].name = newName;
    products[index].price = newPrice;

    // Image changed
    if (imageInput.files.length > 0) {

        const reader =
        new FileReader();

        reader.onload = function (e) {

            products[index].image =
            e.target.result;

            localStorage.setItem(
                "products",
                JSON.stringify(products)
            );

            displayProducts();

            alert("Product Updated");

        };

        reader.readAsDataURL(
            imageInput.files[0]
        );

    } else {

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        displayProducts();

        alert("Product Updated");
    }
}

// Initial Display
displayProducts();

// Add Product Button
const addBtn =
document.getElementById("addProductBtn");

const form =
document.getElementById("productForm");

if(addBtn){

    addBtn.addEventListener("click", () => {

        if (form.style.display === "block") {

            form.style.display = "none";

        } else {

            form.style.display = "block";
        }

    });

}

// Save New Product
const saveBtn =
document.getElementById("saveProductBtn");

if(saveBtn){

    saveBtn.addEventListener("click", () => {

        const name =
        document.getElementById("productName").value;

        const price =
        document.getElementById("productPrice").value;

        const file =
        document.getElementById("productImage").files[0];

        if (!name || !price || !file) {

            alert("Fill all fields");
            return;
        }

        const reader =
        new FileReader();

        reader.onload = function (e) {

            products.push({

                name: name,
                price: price,
                image: e.target.result

            });

            localStorage.setItem(
                "products",
                JSON.stringify(products)
            );

            displayProducts();

            form.style.display = "none";

            document.getElementById("productName").value = "";
            document.getElementById("productPrice").value = "";
            document.getElementById("productImage").value = "";

            alert("Product Added Successfully");

        };

        reader.readAsDataURL(file);

    });

}

// Go To Product Page Button
const goBtn =
document.getElementById("goToProductsBtn");

if(goBtn){

    goBtn.addEventListener("click", () => {

        window.location.href =
        "product.html";

    });

}