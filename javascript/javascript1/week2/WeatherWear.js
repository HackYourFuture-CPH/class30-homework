function whatToWear(temperature) {
    if (temperature >= 25) {
        return "shorts and a t-shirt";
    } else if (temperature >= 15 && temperature < 25) {
        return "light jacket and jeans";
    } else if (temperature >= 5 && temperature < 15) {
        return "sweater and a warm jacket";
    } else {
        return "heavy coat, scarf, and gloves";
    }
}