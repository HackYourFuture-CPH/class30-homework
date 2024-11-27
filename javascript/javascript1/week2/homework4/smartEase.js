
function getFullnameV1(firstName, surname){
    return `${firstName} ${surname}`;
}

const fullName1 = getFullnameV1('Mark', 'Corrigan');
const fullName2 = getFullnameV1('Jeremy', 'Usbourne');
console.log(fullName1);
console.log(fullName2);

function getFullnameV2(firstName, surname, useFormalName=true, gender ='other') {
    if( !useFormalName && gender === 'other'){
        return `${firstName} ${surname}`;
    }
    const prefix = gender === 'male' ? 'Mr.' : gender === 'female' ? 'Mrs.' : '';
    return `${prefix} ${firstName} ${surname}`;
  
}
console.log(getFullnameV2('Mark', 'Corrigan', true, 'male'));
console.log(getFullnameV2('Jeremy', 'Usbourne'));
console.log(getFullnameV2('Sophie', 'Chapman', true, 'female'));
console.log(getFullnameV2('Super', 'Hans', true, 'other'));