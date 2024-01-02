const basket = [
    {item: 'Bananas', quantity: 6, price: 1},
    {item: 'Apples', quantity: 3, price: 1.5},
    {item: 'Bottles of Wine', quantity: 2, price: 10}
];

function calculateTotalPrice(basket) {
    return basket.reduce((total, item) => total + item.quantity * item.price, 0);
};

// Total price
const totalPrice = calculateTotalPrice(basket);

const taxRates = [
    {item: 'Fruits', rate: 6},
    {item: 'Wine', rate: 21}
];

function calculateTax(totalPrice, taxRates) {
    return taxRates.reduce((totalTax, taxRate) => {
        return totalTax + (totalPrice * taxRate.rate) / 100;
    }, 0);
}

// Total tax
const totalTax = calculateTax(totalPrice, taxRates);

console.log(`Total Price: €${totalPrice}`);
console.log(`Tax on Fruits (6%): €${(totalPrice * taxRates[0].rate) / 100}`);
console.log(`Tax on Wine (21%): €${(totalPrice * taxRates[1].rate) / 100}`);
console.log(`Total Tax: €${totalTax}`);