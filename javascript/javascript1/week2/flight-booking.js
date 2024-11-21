

function getFullname(firstname,surname,useFormalName) {
    if (useFormalName == true){
        return ("lord " + firstname + surname)
    }else{
        return(firstname + surname);
    }

    
}


const fullname1 = getFullname("Yuusuf"," Roble",true);
const fullname2 = getFullname("Ismail"," Roble",false);

console.log(fullname1);
console.log(fullname2);
