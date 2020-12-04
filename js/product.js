async function retrieveContent() {
    const url = "http://localhost:3000/api/teddies";
  
    const response = await fetch(url);
    return response.json();
  }

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
        let url = new URL(window.location.href);
        let search_params = new URLSearchParams(url.search); 
        if (search_params.has('id')) {
            let productID = search_params.get('id');
            let product = bears.find(bear => bear._id === productID);
            showProductFound(product);
        } else {
            showProductNotFound();
        }
    } catch (e) {
        console.log('Error', e);
    }
}
showProduct();