const { calculateTotalPrice, calculateTax } = require('./basket');
const assert = require('assert');


function testCalculateTotalPrice() {
    const basket = [
        {item: 'Bannanas', quantity: 6, price: 1},
        {item: 'Apples', quantity: 3, price: 1.5},
        {item: 'Bottles of Wine', quantity: 2, price: 10},
    ];

    assert.strictEqual(calculateTotalPrice(basket), 6 * 1 + 3 * 1.5 + 2 * 10);
}

function testCalculateTax() {
    const totalPrice = 100;
    const taxRates = [
        {item: 'Fruits', rate: 6},
        {item: 'Wine', rate: 21}
    ];

    assert.strictEqual(
        calculateTax(totalPrice, taxRates),
        (100 * taxRates[0].rate / 100 + (100 * taxRates[1].rate) / 100)
    );
}

testCalculateTotalPrice();
testCalculateTax();
console.log("Tests done");