//Shows the order confirmation and orderID, then clean again the localStorage
document.getElementById("order_id").innerHTML = localStorage.getItem("id");
localStorage.clear();