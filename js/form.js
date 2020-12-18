let form = document.getElementById("form");

//POST request
async function postContent(data) {
    const url = "http://localhost:3000/api/teddies/order";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

//send the post request with jSON object and string array
async function sendToServer() {
    try {
        let contact = {
            'firstName': form.elements['form-firstname'].value,
            'lastName': form.elements['form-lastname'].value,
            'address': form.elements['form-address'].value,
            'city': form.elements['form-city'].value,
            'email': form.elements['form-email'].value
        }
        let products = [];
        for (let i = 0; i < localStorage.length; i++) {
            products.push(localStorage.key(i));
        }
        let order = {contact, products};
        const content = await postContent(order);
        localStorage.clear();
        localStorage.setItem("id", content.orderId);
    } catch (e) {
        console.log('Error', e);
    }
}

function checkForm() {
    let CorrectNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,30}$/;
    let CorrectAdressRegex = /^[0-9A-Za-zÀ-ÖØ-öø-ÿ\s-]{5,50}$/;
    let CorrectEmailRegex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    let check = true;

    if (CorrectNameRegex.test(document.getElementById("form-firstname").value) == false) {
        document.getElementById("firstname-indicator").innerHTML = "Prénom au format incorrect. Veuillez utiliser uniquement des lettres, de 2 à 30 caractères";
        check = false;
    } else {
        document.getElementById("firstname-indicator").innerHTML = "";
    }
    if (CorrectNameRegex.test(document.getElementById("form-lastname").value) == false) {
        document.getElementById("lastname-indicator").innerHTML = "Nom au format incorrect. Veuillez utiliser uniquement des lettres, de 2 à 30 caractères";
        check = false;
    } else {
        document.getElementById("lastname-indicator").innerHTML = "";
    }
    if (CorrectAdressRegex.test(document.getElementById("form-address").value) == false) {
        document.getElementById("address-indicator").innerHTML = "Adresse au format incorrect. Veuillez utiliser de 2 à 50 caractères";
        check = false;
    } else {
        document.getElementById("address-indicator").innerHTML = "";
    }
    if (CorrectNameRegex.test(document.getElementById("form-city").value) == false) {
        document.getElementById("city-indicator").innerHTML = "Ville au format incorrect. Veuillez utiliser uniquement des lettres, de 2 à 30 caractères";
        check = false;
    } else {
        document.getElementById("city-indicator").innerHTML = "";
    }
    if (CorrectEmailRegex.test(document.getElementById("form-email").value) == false) {
        document.getElementById("email-indicator").innerHTML = "Email au format incorrect. Veuillez utiliser uniquement des lettres, au format exemple@domaine.ext";
        check = false;
    } else {
        document.getElementById("email-indicator").innerHTML = "";
    }
    if (check) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    let formIsValid = checkForm();
    if (formIsValid) {
        await sendToServer();
        window.location = "ordered.html";
    }
});