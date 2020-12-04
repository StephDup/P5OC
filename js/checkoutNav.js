let buttonContent = document.getElementById("checkout_number");

function getProductQuantity() {
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++){
        sum = sum + parseInt(localStorage.getItem(localStorage.key(i)));
    }
    return sum;
}

let numberOfItemsInCart = getProductQuantity();
buttonContent.innerHTML = numberOfItemsInCart;
if (numberOfItemsInCart == 0) {
    document.getElementById("checkout_button").classList.replace("btn-success", "btn-danger");
}