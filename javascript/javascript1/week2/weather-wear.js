function weatherWear(temperature){
    if (temperature <= -1 ){
        return("You should wear several clothes under the jacket its cooold outside.")
    }else if(temperature <= 10 && temperature > -1){
        return("You should wear a jacket.")
    }else if (temperature <= 20 && temperature > 10){
        return("You can wear a light jacket or a hoodie.");
    }else{
        return("A t-shirt would be appropiate for this weather.");
    }
}

console.log(weatherWear(21))