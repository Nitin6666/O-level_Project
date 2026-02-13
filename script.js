
// Run only after DOM fully loads
document.addEventListener("DOMContentLoaded", function(){

// ==========================
// SEARCH FUNCTION
// ==========================
let searchBtn = document.querySelector(".search-section button");

if (searchBtn) {
    searchBtn.addEventListener("click", function() {

        let searchValue = document.querySelector(".search-section input").value.toLowerCase();
        let products = document.querySelectorAll(".product-card");

        products.forEach(function(product) {
            let title = product.querySelector("h3").innerText.toLowerCase();

            if (title.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}


// ==========================
// ADD TO CART FUNCTION
// ==========================

let buttons = document.querySelectorAll(".product-card button");

if (buttons.length > 0) {
    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            let productName = this.parentElement.querySelector("h3").innerText;
            let priceText = this.parentElement.querySelector("p");

            let price = priceText ? priceText.innerText.replace("₹","") : 0;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({
                name: productName,
                price: price
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(productName + " added to cart!");
        });

    });
}


// ==========================
// NEWSLETTER SUBSCRIBE
// ==========================

let newsletterBtn = document.querySelector(".newsletter button");

if (newsletterBtn) {
    newsletterBtn.addEventListener("click", function(){

        let emailInput = document.querySelector(".newsletter input");

        if(emailInput.value === ""){
            alert("Please enter your email!");
        } else {
            alert("Thank you for subscribing!");
            emailInput.value = "";
        }
    });
}

// ==========================
// PRODUCT CARD HOVER EFFECT
// ==========================

let cards = document.querySelectorAll(".product-card");

if (cards.length > 0) {
    cards.forEach(function(card){

        card.addEventListener("mouseenter", function(){
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
            this.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
        });

        card.addEventListener("mouseleave", function(){
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });

    });
}


// ==========================
// SHOW CART ITEMS COUNT
// ==========================

let cartLink = document.querySelector(".account-section a[href='cart.html']");

if (cartLink) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length > 0){
        cartLink.innerHTML = "Cart 🛒 (" + cart.length + ")";
    }
}

});