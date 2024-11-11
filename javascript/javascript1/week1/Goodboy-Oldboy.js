const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears==true){
    dogYear = (dogYearFuture - dogYearOfBirth)*7;  
}
else{
    dogYear = dogYearFuture - dogYearOfBirth;
}