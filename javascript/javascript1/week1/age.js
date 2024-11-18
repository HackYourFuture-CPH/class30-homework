const yearOfBirth=1987;
const yearFuture=2045;
const age=yearFuture - yearOfBirth;
console.log("my age is"  + " " +  age + " " +  "for future");



const dogYearOfBirth = 2015;
const dogYearFuture = 2045;
const shouldShowResultInDogYears = true;

const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth; 
const dogAgeInDogYears = dogAgeInHumanYears * 7; 

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}.`);
} else {
    console.log(`Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}.`);
}




const Peter = {
  width: 8,
  depth: 10,
  height: 10,
  gardenSizeInM2: 100,
  actualCost: 2500000,
  estimatedPrice: 0
};
Peter.estimatedPrice = Peter.width * Peter.depth * Peter.height * 2.5 * 1000 + Peter.gardenSizeInM2 * 300;
if (Peter.actualCost > Peter.estimatedPrice) {
  console.log('Peter is paying too much. Estimated price: $${Peter.estimatedPrice}.');
} else if (Peter.actualCost < Peter.estimatedPrice) {
  console.log('Peter is paying too little. Estimated price: $${Peter.estimatedPrice}.');
} else {
  console.log('Peter is paying exactly the right amount. Estimated price: $${Peter.estimatedPrice}.');
}
const Julia = {
  width: 5,
  depth: 11,
  height: 8,
  gardenSizeInM2: 70,
  actualCost: 1000000,
  estimatedPrice: 0
};
Julia.estimatedPrice = Julia.width * Julia.depth * Julia.height * 2.5 * 1000 + Julia.gardenSizeInM2 * 300;
if (Julia.actualCost > Julia.estimatedPrice) {
  console.log('Julia is paying too much. Estimated price: $${Julia.estimatedPrice}.');
} else if (Julia.actualCost < Julia.estimatedPrice) {
  console.log('Julia is paying too little. Estimated price: $${Julia.estimatedPrice}.');
} else {
  console.log('Julia is paying exactly the right amount. Estimated price: $${Julia.estimatedPrice}.');
}



const firstWords = ["Easy", "Awesome", "Corporate", "Tech", "Creative", "Smart", "Innovative", "Future", "Next", "Quantum"];
const secondWords = ["Solutions", "Systems", "Dynamics", "Design", "Labs", "Ventures", "Concepts", "Partners", "Works", "Global"];


const randomFirstIndex = Math.floor(Math.random() * firstWords.length); 
const randomSecondIndex = Math.floor(Math.random() * secondWords.length);


const startupName = firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];


console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters.");
