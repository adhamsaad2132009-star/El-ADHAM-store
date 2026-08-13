// El-ADHAM Store - JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // زر إضافة المنتج للسلة
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            const product =
                button.closest(".product") ||
                button.closest(".card");

            let productName = "المنتج";

            if (product) {
                const nameElement =
                    product.querySelector("h2") ||
                    product.querySelector("h3") ||
                    product.querySelector(".product-name");

                if (nameElement) {
                    productName = nameElement.textContent.trim();
                }
            }

            alert("تم إضافة " + productName + " إلى السلة 🛒");
        });
    });

    // البحث عن المنتجات
    const searchInput =
        document.querySelector("#search") ||
        document.querySelector(".search-input");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase().trim();

            const products = document.querySelectorAll(
                ".product, .card, .product-card"
            );

            products.forEach(function (product) {

                const text = product.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });
        });
    }

    //
