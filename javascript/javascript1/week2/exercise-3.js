// Exercise 3: Weather wear

function getAdviceToCloth(temp) {
	if (temp <= 10) {
		return "Take a winter cloth and boots.";
	} else if (temp > 5 && temp < 20) {
		return "You may wear the light jacket, cap and sneackers ";
	} else if (temp >= 20 && temp < 32) {
		return "That is a real summer! Dress shorts, t-shirts and sunglasses:)) ";
	} else {
		return "OMG! Minimum cloth and get cover:))";
	}
}

const clothToWear1 = getAdviceToCloth(-3);
const clothToWear2 = getAdviceToCloth(12);
const clothToWear3 = getAdviceToCloth(50);

console.log(clothToWear1);
console.log(clothToWear2);
console.log(clothToWear3);
