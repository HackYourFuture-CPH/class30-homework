const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears==true){
    dogYear = (dogYearFuture - dogYearOfBirth)*7;  
    console.log('Your dog will be '+ dogYear+' dog years old in '+ dogYearFuture+'.');
}
else{
    dogYear = dogYearFuture - dogYearOfBirth;
    console.log('Your dog will be '+ dogYear+' human years old in '+dogYearFuture+'.');
}