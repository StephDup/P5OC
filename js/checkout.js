let listCheckout = document.getElementById("list-checkout");
let alertCard = document.getElementById("alert-card");
let deleteAllButton = document.getElementById("delete-all");
let checkoutNotEmpty = document.getElementById("checkout-notempty");
let totalPrice = 0;

//Shows the list of all items in cart
function showContent() {
    for (let i = 0; i < localStorage.length; i++) {
        let bear = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let newLi = document.createElement("li");
        newLi.classList.add("media", "border", "border-dark", "mt-3");
        let newImg = document.createElement("img");
        newImg.classList.add("mr-3", "w-25");
        newMediaBody = document.createElement("div");
        newMediaBody.classList.add("media-body");
        newTitle = document.createElement("h5");
        newTitle.classList.add("mt-2", "mb-1");
        newText = document.createElement("p");
        newPrice = document.createElement("p");
        newDeleteButton = document.createElement("a");
        newDeleteButton.classList.add("btn", "btn-danger", "mb-2");
        newDeleteButton.setAttribute("id", bear._id);
        newDeleteButton.setAttribute("href", "checkout.html");
        newDeleteButton.innerHTML = "Supprimer";
        newDeleteButton.addEventListener("click", function (e) {
            localStorage.removeItem(bear._id);
        });
        newMediaBody.appendChild(newTitle);
        newMediaBody.appendChild(newText);
        newMediaBody.appendChild(newPrice);
        newMediaBody.appendChild(newDeleteButton);
        newLi.appendChild(newImg);
        newLi.appendChild(newMediaBody);
        listCheckout.appendChild(newLi);

        newImg.setAttribute("src", bear.imageUrl);
        newImg.setAttribute("alt", bear.name);
        newTitle.innerHTML = bear.name;
        newText.innerHTML = bear.description;
        newPrice.innerHTML = "Prix : " + bear.price;
        totalPrice += bear.price;
    }
    document.getElementById("total-price").innerHTML = totalPrice;
}

if (localStorage.length == 0) {
    alertCard.classList.remove("d-none");
    checkoutNotEmpty.classList.add("d-none");
} else {  
    showContent();
}

deleteAllButton.addEventListener("click", function (e) {
    localStorage.clear();
});