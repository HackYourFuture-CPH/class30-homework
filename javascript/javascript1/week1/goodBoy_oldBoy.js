const dogYearOfBirth = 2015;
let dogYearFuture = 2045;

let dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let humanYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYear = true;
const dogOrHumanYear = shouldShowResultInDogYear ? `${dogYear} Dog year` : `${humanYear} Human year`;
console.log(`Your dog will be ${dogOrHumanYear}`);


