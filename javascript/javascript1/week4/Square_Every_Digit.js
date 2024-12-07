function squareEveryDigit(number){
    if(typeof(number) !== "number"){
        return "It is not a number";
    }
    
    const digits = number.toString();
    let result = "";
    
    for(let digit of digits){
        result += (digit*digit).toString();
    }

    result = parseInt(result, 10)

    return result;
}

const number1 = 9119;
const number2 = 765;
const number3 = "151";
const number4 = 151;

console.log(squareEveryDigit(number1));
console.log(squareEveryDigit(number2));
console.log(squareEveryDigit(number3));
console.log(squareEveryDigit(number4));
