//GET request
async function retrieveContent() {
  const url = "http://localhost:3000/api/teddies";

  const response = await fetch(url);
  return response.json();
}

//Creates a Bootstrap Card with all details from one teddybear
function createCard(data) {
    let text = document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML = data.description;

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = data.name;

    let link = document.createElement("a");
    let productUrl = "product.html?id=" + data._id;
    link.setAttribute("href", productUrl);
    link.classList.add("btn", "btn-primary", "stretched-link");
    link.innerHTML = "Commander";

    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    cardbody.appendChild(title);
    cardbody.appendChild(text);
    cardbody.appendChild(link);

    let cardimg = document.createElement("img");
    cardimg.setAttribute("src", data.imageUrl);
    cardimg.setAttribute("alt", data.name);
    cardimg.classList.add("card-img-top");

    let card = document.createElement("div");
    card.classList.add("card", "mb-4", "mb-lg-0", "border-primary", "shadow");
    card.appendChild(cardimg);
    card.appendChild(cardbody);

    let col = document.createElement("div");
    col.classList.add("col-12", "col-lg-4");
    col.appendChild(card);

    document.getElementById("bearlist").appendChild(col);
}

//Shows bears list or shows error if the server is down
async function showContent() {
  try {
    const bears = await retrieveContent();
    bears.forEach(bear => {
        createCard(bear);
    });
  } catch (e) {
    console.log('Error', e);
    let failedToConnectAlert = document.createElement("p");
    failedToConnectAlert.innerHTML = "Erreur de connexion au serveur, veuillez réessayer. Erreur : " + e;
    document.getElementById("bearlist").appendChild(failedToConnectAlert);
  }
}

showContent();