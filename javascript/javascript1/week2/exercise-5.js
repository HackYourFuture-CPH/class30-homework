// Exercise 5: Candy helper

const boughtCandyPrices = [];
const amountToSpent = Number((Math.random() * 100).toFixed(2));

const candyPrices = {
	Sweet: 0.5,
	Chocolate: 0.7,
	Toffee: 1.1,
	"Chewing-gum": 0.03,
};

function addCandy(candyType, weight) {
	const totalPrice = candyPrices[candyType] * weight;
	boughtCandyPrices.push(parseFloat(totalPrice.toFixed(2)));
}

function canBuyMoreCandy(boughtCandy) {
	let totalAmount = 0;
	for (let i = 0; i < boughtCandy.length; i++) {
		totalAmount += boughtCandy[i];
	}
	console.log(totalAmount);
	console.log(amountToSpent);

	totalAmount > amountToSpent
		? console.log("Enough candy for you!")
		: console.log("You can buy more, so please do!");
}

addCandy("Sweet", 20);
addCandy("Toffee", 15);
addCandy("Chewing-gum", 150);
addCandy("Chocolate", 80);

console.log(boughtCandyPrices);

canBuyMoreCandy(boughtCandyPrices);
