document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".add-btn");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            let products = JSON.parse(localStorage.getItem("products")) || [];
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

const product = products[index];

if (!product) {
    alert("Product not found.");
    return;
}
            // Check if product already exists
            const existing = cart.find(item => item.name === product.name);

            if (existing) {

                existing.quantity += 1;

            } else {

                cart.push({

                    name: product.name,
                    price: Number(product.price),
                    image: product.image,
                    quantity: 1

                });

            }

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            button.innerHTML = "✓ Added";
            button.style.background = "#16a34a";
            button.disabled = true;

            button.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.1)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 400
                }
            );

        });

    });

});
