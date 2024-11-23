function whatWearToday(temperature){
    if(temperature<= -20){
        return "Where are you??? Stay home!";
    }

    if(temperature > -20 && temperature <= 5 ){
        return "Put on warm pants, a warm jacket and a hat.";
    }
    
    if(temperature > 5 && temperature <= 18){
        return "Put on your pants and a sweatshirt.";
    }
    if(temperature > 18 && temperature <= 35){
        return "Put on shorts and a T-shirt.";
    }
    if(temperature > 35){
        return "Put on your swimming trunks, ang go to sea immediately!";
    }
}

const clothesToWear = whatWearToday(-55);
console.log(clothesToWear);