function countVowel(givenString){
    if(givenString === "" || typeof(givenString) !== "string"){
        return "error";
    } 

    let vowelCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let vowel of vowels) {
        for (let letter of givenString) {
            if (letter === vowel) {
                vowelCount++;
            }
        }
    }

    return `Number of vowels: ${vowelCount}`;
}

const string1 = "andrii";
const string2 = "aii";
const string3 = "ndry";
console.log(countVowel(string1));
console.log(countVowel(string2));
console.log(countVowel(string3));

