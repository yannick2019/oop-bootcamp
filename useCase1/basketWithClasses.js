class Basket {
    constructor() {
        this.basket = [];
    }

    addItem(item, quantity, price) {
        this.basket.push({ item, quantity, price });
    }

    calculateTotalPrice() {
        return this.basket.reduce((total, item) => total + item.quantity * item.price, 0);
    }
}

class TaxCalculator {
    constructor() {
        this.taxRates = [];
    }

    addTaxRate(item, rate) {
        this.taxRates.push({ item, rate });
    }

    calculateTax(totalPrice) {
        return this.taxRates.reduce((totalTax, taxRate) => {
            return totalTax + (totalPrice * taxRate.rate) / 100;
        }, 0);
    }
}

const basket = new Basket();
basket.addItem('Bananas', 6, 1);
basket.addItem('Apples', 3, 1.5);
basket.addItem('Bottles of Wine', 2, 10);

const taxCalculator = new TaxCalculator();
taxCalculator.addTaxRate('Fruits', 6);
taxCalculator.addTaxRate('Wine', 21);

const totalPrice = basket.calculateTotalPrice();
const totalTax = taxCalculator.calculateTax(totalPrice);

console.log(`Total Price: €${totalPrice}`);
console.log(`Tax on Fruits (6%): €${(taxCalculator.taxRates[0].rate * totalPrice) / 100}`);
console.log(`Tax on Wine (21%): €${(taxCalculator.taxRates[1].rate * totalPrice) / 100}`);
console.log(`Total Tax: €${totalTax}`);