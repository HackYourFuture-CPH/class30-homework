// function getFullname(firstname, surname){
//     return firstname + ' ' + surname;
// }


// // Formal fullname
// function getFullname(firstname, surname, useFormalName) {
//     return useFormalName ? 'Lord ' + firstname + ' ' + surname : 
//     firstname + ' ' + surname;
// }


function getFullname(firstname, surname, useFormalName=true, gender) {
    return firstname === '' || surname === '' ? 'Please provide your firstname and surname.' : 
    useFormalName && gender === 'male' ? 'Lord ' + firstname + ' ' + surname : 
    useFormalName && gender === 'female' ? 'Lady ' + firstname + ' ' + surname :
    firstname + ' ' + surname;
}


const fullname1 = getFullname('Alice', 'White', 'female');
const fullname2 = getFullname('Alex', 'Black', true, 'male');
const fullname3 = getFullname('Ceci', 'Jensen', true, 'female');
const fullname4 = getFullname('', '');
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);

// fullname1: useFormalName is not given.
// fullname2 & fullname3: different gender with useFormalName = true.
// fullname4: firstname and surname is not given