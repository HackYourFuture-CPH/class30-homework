// Javascript warm up part one
let myFreeCodeCampUserName="@Hossein1065";

// Age-ify (A future age calculator)
var yearOfBirth =1986;
var yearFuture=2025;
var age=yearFuture-yearOfBirth;
console.log("you will be "+ age + " years old in "+ yearFuture);

//Goodboy-Oldboy (A dog age calculator)
var dogYearOfBirth=2017;
var dogYearFuture=2045;
var dogYear= (dogYearFuture-dogYearOfBirth)*7;
var shouldShowResultInDogYears;
if (shouldShowResultInDogYears =true){

console.log("it is dog years and your dog will be " +dogYear+" years old in "+ dogYearFuture);
console.log(shouldShowResultInDogYears);
}
else{
console.log("it is human years and you dog will be " + (dogYear/7) +" years old in "+dogYearFuture)
}


//Housey pricey (A house price estimator)
const peterHouseHight=10;
const peterHouseWidth=8;
const peterHouseDeep=10;
const peterHouseGarden=100;
const peterVolumeInMeters=(peterHouseHight*peterHouseWidth*peterHouseDeep);
let peterHousePrice= (peterVolumeInMeters*2.5*1000)+(peterHouseGarden*300);
console.log("the real house Peter price is " + peterHousePrice + " and he have paid more than the real peice.");

const juliaHouseHight=8;
const juliaHouseWidth=5;
const juliaHouseDeep=11;
const juliaHouseGarden=70;
const juliaVolumeInMeters=(juliaHouseHight*juliaHouseWidth*juliaHouseDeep);
let juliaHousePrice= (juliaVolumeInMeters*2.5*1000)+(juliaHouseGarden*300);
console.log("the real house Julia price is: " + juliaHousePrice + " and she have paid less than the real peice.");

// Ez Namey (Startup name generator) Optional
 const firstWords=["Practical","Easy" ,"Sooner","Flexible","Variable", "Smart","Creative","faster", "Quick", "Dynamic"];
 const secondWords=["Attractive","Free","bombshell","Bonny","tech","Engaging","Enchantress","Foxy","lovely","Magical"];
 const randomFirstwords= firstWords[Math.floor(Math.random()*firstWords.length)];
 const randomSecondWords=secondWords[Math.floor(Math.random()*secondWords.length)];
 const startupName= randomFirstwords+" "+randomSecondWords;
 console.log("this name is suggested for you:"+startupName);