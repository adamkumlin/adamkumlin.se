let startingCash = 264000000000;

let currentCash = document.getElementById("currentCashAmount");
currentCash.innerText = startingCash.toLocaleString() + " dollar";

function buy(button) {
    switch (button.id) {
        case "product0Button": startingCash = startingCash - 8;
            currentCash.innerText = startingCash.toLocaleString() + " dollar";
            break;

        case "product1Button": startingCash = startingCash - 15;
            currentCash.innerText = startingCash.toLocaleString() + " dollar";
            break;

        case "product2Button": startingCash = startingCash - 560000;
            currentCash.innerText = startingCash.toLocaleString() + " dollar";
            break;
    }
}

