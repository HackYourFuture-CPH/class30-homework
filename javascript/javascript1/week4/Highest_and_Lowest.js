function highestandLowest(stringOfNumbers){
    const array = stringOfNumbers.split(" ").map(Number);

    const numbers = ["1234567890 "];

    if(array.length < 1 || stringOfNumbers.length < 1){
        return "Add at least one number";
    }

    let maxNumber = array[0];
    let minNumber = array[0];
    for(let number of array){
        if(number > maxNumber){
            maxNumber = number;
        }
        if(number < minNumber){
            minNumber = number;
        }
    }

    return `${maxNumber} ${minNumber}`;
}

const string1 = "1 2 3 4 5 6";
const string2 = "-5 2 36 4 52 0";
const string3 = "100 0 3 -4 5 61";
const string4 = "";

console.log(highestandLowest(string1));
console.log(highestandLowest(string2));
console.log(highestandLowest(string3));
console.log(highestandLowest(string4));
