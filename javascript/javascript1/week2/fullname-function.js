function getFullname(firstname ,surname,  gender ='', useFormalName = true ){
  if (firstname === '' || surname === '') {
    return 'Please provide both a first name and a surname.';
  } 

  if (useFormalName === true && gender === 'male') {
    return 'Lord ' + firstname + ' ' + surname;
  } 
  
  if (useFormalName === true && gender === 'female') {
    return 'Lady ' + firstname + ' ' + surname;
  }

  return firstname + ' ' + surname;
}

//test cases
const fullname1 = getFullname('Farzaneh', 'Ahmadi', 'female');
const fullname2 = getFullname('Hamid', 'Khoshakhlagh' , 'male', true);
const fullname3 = getFullname('Parisa', 'Mosavi', 'female', true);
const fullname4 = getFullname('Ali', 'Akbari', 'male',false);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);