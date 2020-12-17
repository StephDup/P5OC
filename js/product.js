//GET request
async function retrieveContent() {
    const url = "http://localhost:3000/api/teddies";
  
    const response = await fetch(url);
    return response.json();
}

//Displays the bear card with details and color selector
function showProductFound(product) {
    document.getElementById("card-img").setAttribute("src", product.imageUrl);
    document.getElementById("card-title").innerHTML = product.name;
    document.getElementById("card-text").innerHTML = product.description;
    document.getElementById("card-price").innerHTML = product.price;
    product.colors.forEach(color => {
        let newOption = document.createElement("option");
        newOption.setAttribute("value", color);
        newOption.innerHTML = color;
        document.getElementById("product_color").appendChild(newOption);
    });
}

function showProductNotFound() {
    console.log("not found");
}

async function showProduct() {
    try {
        const bears = await retrieveContent();

        //picks url params to get the correct bear
        let url = new URL(window.location.href);
        let search_params = new URLSearchParams(url.search); 
        if (search_params.has('id')) {
            let productID = search_params.get('id');
            if (!localStorage.getItem(productID)) {
                let product = bears.find(bear => bear._id === productID);
                showProductFound(product);

                //Add to checkout button when clicked
                document.getElementById("add_to_checkout").addEventListener("click", function(event) {
                    localStorage.setItem(productID, JSON.stringify(product));
                    document.getElementById("alert-card").classList.remove("d-none");
                    document.getElementById("product-card").classList.add("d-none");
                    document.getElementById("buy-other").classList.add("d-none");
                });
            } else {
                document.getElementById("already-ordered").classList.remove("d-none");
                document.getElementById("buy-other").classList.add("d-none");
                document.getElementById("product-card").classList.add("d-none");
            }
        } else {
            showProductNotFound();
        }
    } catch (e) {
        console.log('Error', e);
        let failedToConnectAlert = document.createElement("p");
        failedToConnectAlert.innerHTML = "Erreur de connexion au serveur, veuillez réessayer. Erreur : " + e;
        document.getElementById("bearlist").appendChild(failedToConnectAlert);
    }
}

showProduct();