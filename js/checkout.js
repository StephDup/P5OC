let listCheckout = document.getElementById("list-checkout");
let alertCard = document.getElementById("alert-card");
let deleteAllButton = document.getElementById("delete-all");

async function retrieveContent() {
    const url = "http://localhost:3000/api/teddies";
  
    const response = await fetch(url);
    return response.json();
}

function createCheckoutList(bears) {
    for (let i = 0; i < localStorage.length; i++) {
        let newLi = document.createElement("li");
        newLi.classList.add("media", "border", "border-dark", "mt-3");
        let newImg = document.createElement("img");
        newImg.classList.add("mr-3", "w-25");
        newMediaBody = document.createElement("div");
        newMediaBody.classList.add("media-body");
        newTitle = document.createElement("h5");
        newTitle.classList.add("mt-0", "mb-1");
        newText = document.createElement("p");
        newMediaBody.appendChild(newTitle);
        newMediaBody.appendChild(newText);
        newLi.appendChild(newImg);
        newLi.appendChild(newMediaBody);
        listCheckout.appendChild(newLi);

        bears.forEach(bear => {
            if (bear._id == localStorage.key(i)) {
                newImg.setAttribute("src", bear.imageUrl);
                newImg.setAttribute("alt", bear.name);
                newTitle.innerHTML = bear.name;
                newText.innerHTML = bear.description;
            }
        });
    }
}

async function showContent() {
    try {
      const bears = await retrieveContent();
      createCheckoutList(bears);
    } catch (e) {
      console.log('Error', e);
    }
}

if (localStorage.length == 0) {
    alertCard.classList.remove("d-none");
    deleteAllButton.classList.add("d-none");
} else {  
    showContent();
}



deleteAllButton.addEventListener("click", function (e) {
    localStorage.clear();
});