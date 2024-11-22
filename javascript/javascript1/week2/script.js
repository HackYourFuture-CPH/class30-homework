
//Flight booking fullname function

function getFullName(firstName, surname, useFormalName = true, gender = "") {
    if (useFormalName) {
        if (gender === "male") {
            return "lord " + firstName + surname;
        } else if (gender === "female") {
            return "lady " + firstName + surname;
        }
    }
            return firstName + surname;
        }
    

    console.log(getFullName("Benjamin ", "Hughes", true,"male"))
    console.log(getFullName("Benjamin ", "Hughes", false))
    console.log(getFullName("Stefany"," Romero",true,"female"))


//Event Application

function getEventWeekday(daysFromToday){

const weekDays= [,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date().getDate();
const eventDay = (today + daysFromToday) % 7;
return weekDays[eventDay];

}
console.log(getEventWeekday(9));
console.log(getEventWeekday(2)); 

//Weather wear

function clothesTowear(temperature){
    
    if( temperature >= 15){
        return  "temperature is " + temperature + " you sholud wear" + "Jacket and pants" 
    }else{
        return  "temperature is " + temperature + " you sholud wear"+ "shorts and t shirt"
    } 
    }

console.log(clothesTowear(18));
console.log(clothesTowear(12));