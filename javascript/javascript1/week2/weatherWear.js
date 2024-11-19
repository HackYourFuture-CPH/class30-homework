function wearRightWithWeather(temperature) {
    if (temperature < -5) {
        return 'all of your warm clothes'
    }else if (temperature < 5 && temperature >= -5) {
        return 'down coat, scarf and hat'
    }else if (temperature < 15 && temperature >= 5) {
        return 'parka coat and scarf'
    }else if (temperature <20 && temperature >=15) {
        return 'jacket and jeans'
    }else if (temperature <25 && temperature >=20) {
        return 'hoodies and light trousers'
    }else if (temperature < 30 && temperature >=25) {
        return 'T-shirt and shorts'
    }else return 'cool clothes and sunglasses'
}

const clothesToWear = wearRightWithWeather(16);
console.log("Today wearing " + clothesToWear + " is recommended.");
