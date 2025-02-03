function getFullName(firstname, surname, useFormalName=false, maleOrFemale=true){
    const sex = maleOrFemale ? "Lord" : "Majesty";
    const fullName = useFormalName ? `${sex} ${firstname} ${surname}` : `${firstname} ${surname}`;
    console.log(fullName);
}

let fullName1 = getFullName("Benjamin", "Hughes")
let fullName2 = getFullName("Ahmad", "Mohammad", true)

