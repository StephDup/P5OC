let url = new URL(window.location.href);
let search_params = new URLSearchParams(url.search);
let productID = search_params.get('id');
let productCard = document.getElementById("product-card");
let alertCard = document.getElementById("alert-card");

document.getElementById("add_to_checkout").addEventListener("click", function(event) {
    let quantity = parseInt(document.getElementById("quantity").innerHTML);
    if (!localStorage.getItem(productID)) {
        console.log(productID);
        localStorage.setItem(productID, quantity);
    } else {
        let oldQuantity = parseInt(localStorage.getItem(productID));
        console.log(oldQuantity);
        localStorage.setItem(productID, parseInt(oldQuantity + quantity));
    }
    productCard.classList.add("d-none");
    alertCard.classList.remove("d-none");
});