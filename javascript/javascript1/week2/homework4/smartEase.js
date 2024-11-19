
function getFullnameV1(firstName, surname){
  let fullName = `${firstName} ${surname}`
  return fullName;
}

const fullName1 = getFullnameV1('Mark', 'Corrigan');
const fullName2 = getFullnameV1('Jeremy', 'Usbourne');
console.log(fullName1);
console.log(fullName2);

function getFullnameV2(firstName, surname, useFormalName=true, gender) {
    if((useFormalName === undefined || useFormalName === false) && (gender === undefined || gender === 'other')){
        return getFullnameV1(firstName, surname)
    }
    else if(useFormalName === true){
        if (gender === 'male'){
            let fullFormalName = 'Mr. ' + getFullnameV1(firstName, surname);
            return fullFormalName;
        }else if(gender === 'female'){
            let fullFormalName = 'Mrs. ' + getFullnameV1(firstName, surname);
            return fullFormalName;
        }
    }
  
}
console.log(getFullnameV2('Mark', 'Corrigan', true, 'male'));
console.log(getFullnameV2('Jeremy', 'Usbourne'));
console.log(getFullnameV2('Sophie', 'Chapman', true, 'female'));