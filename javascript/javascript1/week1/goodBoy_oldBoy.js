const dogYearOfBirth = 2015;
const dogYearFuture = 2045;

const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYear = true;
const dogOrHumanYear = shouldShowResultInDogYear
  ? `${dogYear} Dog year`
  : `${humanYear} Human year`;
console.log(`Your dog will be ${dogOrHumanYear}`);
