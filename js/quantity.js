let removeButton = document.getElementById("remove_one");
let addButton = document.getElementById("add_one");
let quantityElement = document.getElementById("quantity");
let totalAmount = document.getElementById("total_amount");
let price = document.getElementById("card-price");
let addToCheckout = document.getElementById("add_to_checkout");

removeButton.addEventListener("click", function () {
    if (quantityElement.innerHTML != 0) {
        quantityElement.innerHTML -= parseInt(1);
        totalAmount.innerHTML = parseInt(quantityElement.innerHTML) * parseInt(price.innerHTML);
        if (parseInt(quantityElement.innerHTML) == 0) {
            removeButton.classList.replace("btn-info", "btn-secondary");
            removeButton.classList.add("disabled");
            addToCheckout.classList.replace("btn-info", "btn-secondary");
            addToCheckout.classList.add("disabled");
        } else if (parseInt(quantityElement.innerHTML) == 9) {
            addButton.classList.replace("btn-secondary", "btn-info");
            addButton.classList.remove("disabled");
        }
    }
});

addButton.addEventListener("click", function () {
    if (quantityElement.innerHTML != 10) {
        quantityElement.innerHTML = parseInt(quantityElement.innerHTML) + 1;
        totalAmount.innerHTML = parseInt(quantityElement.innerHTML) * parseInt(price.innerHTML);
        if (parseInt(quantityElement.innerHTML) == 10) {
            addButton.classList.replace("btn-info", "btn-secondary");
            addButton.classList.add("disabled");
        } else if (parseInt(quantityElement.innerHTML) == 1) {
            removeButton.classList.replace("btn-secondary", "btn-info");
            removeButton.classList.remove("disabled");
            addToCheckout.classList.replace("btn-secondary", "btn-info");
            addToCheckout.classList.remove("disabled");
        }
    }
});