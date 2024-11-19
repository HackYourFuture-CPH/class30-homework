
function suggestWhatToWear(num){
    let youShoudWear = "nothing"
    if( num >=18){
        youShoudWear = "T-shirt and Shorts";
    }else if( num >= 5 && num <= 18){
        youShoudWear = "Sweater and Pants";
    }else if(num < 5){
        youShoudWear = "Jacket, Pants, Hat"
    } else{
        youShoudWear = "whatever you think keeps alive"
    }
    return youShoudWear;
}
console.log(suggestWhatToWear(-2))