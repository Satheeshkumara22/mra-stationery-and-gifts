document.addEventListener("DOMContentLoaded", () => {

    const buttons =
    document.querySelectorAll(".add-btn");

    buttons.forEach((button,index) => {

        button.addEventListener("click", () => {

            let products =
            JSON.parse(
                localStorage.getItem("products")
            ) || [];

            let cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

            cart.push(products[index]);

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            button.innerText = "✓ Added";
            button.style.background = "#16a34a";
            button.disabled = true;

            button.animate(
            [
                {transform:"scale(1)"},
                {transform:"scale(1.1)"},
                {transform:"scale(1)"}
            ],
            {
                duration:400
            });

        });

    });

});