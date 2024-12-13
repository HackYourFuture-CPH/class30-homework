/*
function getCharacterFrequencies(word) {
    const characters = [];

    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        characters.push({
            character: letter,
            count: 0
        })
    }

    //console.log(characters);

    for (let letter of word) {
        for (let possibility of characters) {
            if (possibility.character === letter) {
                possibility.count++;
            } 
        } 
    }
    return {
        'characters': characters,
        'length': word.length,
    }
}

console.log(getCharacterFrequencies('happy'));
*/
/*
function formatCreditCardNumber(number){
    let result = '';
    let strNumber = number.toString();
    let fourNums = strNumber.shift(4);
    for (let i = 0; i < Math.floor(strNumber.length/4); i++){
        result += `${fourNums} `
    }
    result += strNumber
    return {
        original: number,
        formatted: result
    }

}

console.log(formatCreditCardNumber(6785423091))
*/

function fizzBuzz(limit){
    for (let i =1; i <= limit; i++){
        if ((i % 5 !== 0) && (i % 3 !== 0)){
            console.log(i)
        } else if ((i % 3 === 0)&&( i%5===0)){
            console.log(`FizzBuzz`)
        } else if (i % 5 === 0){
            console.log(`Buzz`)
        } else if(i%3===0) {
            console.log(`Fizz`)
        }
    }
}
fizzBuzz(100)