document.getElementById("checkout_number").innerHTML = localStorage.length;

if (localStorage.length == 0) {
    document.getElementById("checkout_button").classList.replace("btn-success", "btn-danger");
}