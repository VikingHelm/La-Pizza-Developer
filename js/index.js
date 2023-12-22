// Inputs
const pizzaSize = document.querySelector('#pizzaSize');
const pizzaType = document.querySelector('#pizzaType');
const pizzaExtraIngredients = document.querySelector('.pizzaExtraIngredients');
// Checkboxes
var checkboxes = document.getElementsByName("extraTopping");
var totalToppingPrice = 0;
// Button
const btn = document.querySelector('.btn');
const showFinalPrice = document.querySelector('.showFinalPriceText');
// Area Size Math
const smallArea = Math.PI * (5 * 5);
const mediumArea = Math.PI * (7 * 7);
const bigArea = Math.PI * (8 * 8);
const pricePerCm = 0.03;
const baseCookingPrice = 3;
// console.log(bigArea)


// Events
pizzaType.addEventListener('change', function showOrHideIngredient(e) {
    if (e.target.value === 'Ingredientes') {
        pizzaExtraIngredients.classList.remove('hidden');
    } else {
        pizzaExtraIngredients.classList.add('hidden');
        Array.from(pizzaExtraIngredients.querySelectorAll('input[type="checkbox"]')).forEach(function(checkbox) {
            checkbox.checked = false;
        });

    }
});

btn.addEventListener('click', calculateFinalPrice);

// Functions
function calculateFinalPrice() {

    // Toppings
    function calculateToppingPrices() {
        totalToppingPrice = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {

                var topping = checkboxes[i].value;
                var toppingPrice = calculateToppingPrice(topping);


                totalToppingPrice += toppingPrice;

                // console.log(totalToppingPrice)      

                // document.getElementById("totalToppingPrice").textContent = "Ingredientes extra: $" + totalToppingPrice.toFixed(2);
            }
        }
    }
    calculateToppingPrices();


    // Final Price
    const pizzaSize = document.querySelector('.pizzaSize').value;

    if (pizzaSize === 'Pequeña') {
        let finalPrice = (smallArea * pricePerCm) + baseCookingPrice + totalToppingPrice;
        showFinalPrice.textContent = `
            Precio total de la pizza: $${finalPrice.toFixed(2)}
        `;
    } else if (pizzaSize === 'Mediana') {
        let finalPrice = (mediumArea * pricePerCm) + baseCookingPrice + totalToppingPrice;
        showFinalPrice.textContent = `
            Precio total de la pizza: $${finalPrice.toFixed(2)}
        `;
    } else if (pizzaSize === 'Grande') {
        let finalPrice = (bigArea * pricePerCm) + baseCookingPrice + totalToppingPrice;
        showFinalPrice.textContent = `
            Precio total de la pizza: $${finalPrice.toFixed(2)}
        `;
    }


}



function calculateToppingPrice(topping) {
    var toppingPrices = {
        "extra": 1.00,
        // "Aceitunas": 1.00,
        // "Anchoas": 1.00,
        // "Salchichón": 1.00,
        // "Pepperoni": 1.00
    };
    return toppingPrices[topping];
}