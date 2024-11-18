function getFullname(firstname ,surname, useFormalName = false){
  
  return firstname === '' || surname === '' ? 'Please provide both a first name and a surname.' :
         useFormalName === true ?  'Lord '+ firstname+' '+ surname :  firstname+' '+ surname;
}
const fullname1 = getFullname('Farzaneh', 'Ahmadi');
const fullname2 = getFullname('Hamid', 'Khoshakhlagh', true);

console.log(fullname1);
console.log(fullname2);