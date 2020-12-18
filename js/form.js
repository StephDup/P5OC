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
        let form = document.getElementById('form');
        let contact = {
            'firstName': form.elements['form-firstname'].value,
            'lastName': form.elements['form-lastname'].value,
            'address': form.elements['form-adress'].value,
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

document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    await sendToServer();
    window.location = "ordered.html";
});