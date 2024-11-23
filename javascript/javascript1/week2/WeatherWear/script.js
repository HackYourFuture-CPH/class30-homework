
const temperature = 20;

function getTemperature(temperature){
    if (temperature < 5){
        return "Is very cold outside, dress warmly before heading out.";
    }

    else if (temperature <= 15) {
        return "Is cold, not much, but still cold, so take a hoodie with you!";
    }

    else if (temperature > 15 && temperature <= 25) {
        return "Very nice day, but we can't consider this as summer, so... take a jacket with you";
    }

    else if (temperature >= 25) {
        return "Very nice day, enjoy the summer time! just take a tshirt haha";
    }

    } 

    console.log(getTemperature(temperature));
