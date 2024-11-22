//Weather wear
let tempurture= prompt("What is the temperature?");

function decideClothes(temperature) {
    if (temperature >= 25) {
        return "T-shirt and Shorts";
    } else if (temperature < 25 && temperature >= 15) {
        return "A light sweater and jeans";
    } else if (temperature < 15 && temperature >= 5) {
        return "A jacket and warm pants";
    } else {
        return "A heavy coat, scarf, and gloves";
    }
}
const clothesToWear = decideClothes(tempurture);
console.log(clothesToWear);