
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


console.log(getFullName("Benjamin ", "Hughes", true, "male"))
console.log(getFullName("Benjamin ", "Hughes", false))
console.log(getFullName("Stefany", " Romero", true, "female"))


//Event Application

function getEventWeekday(daysFromToday) {

    const weekDays = [, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDate();
    const eventDay = (today + daysFromToday) % 7;
    return weekDays[eventDay];

}
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

//Weather wear

function clothesTowear(temperature) {

    if (temperature >= 15) {
        return "temperature is " + temperature + " C: you sholud wear" + "Jacket and pants"
    } else {
        return "temperature is " + temperature + " C: you sholud wear" + "shorts and t shirt"
    }
}

console.log(clothesTowear(18));
console.log(clothesTowear(12));

//Student Manager

let class075Students = [];


function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("Add maximun 6 students in this class");
    } else if (class075Students.includes(studentName)) {
        console.log("This student is already in this class");
    } else if (class075Students.length >= 6) {
        console.log("Cannot add more students to class 07");
        return studentName;
    } else {
        class075Students.push(studentName);
        console.log("Add the name of the student");
    }
}


function getNumberOfStudents() {
    return class075Students.length;
}

addStudentToClass("Pedro");
addStudentToClass("Pedro");
addStudentToClass("Maria");
addStudentToClass("Maria");
addStudentToClass("Damoa");
addStudentToClass("Stefany");
addStudentToClass("Benjamin");


addStudentToClass("Queen"); // Exceeds limit

console.log("Total students in the class:" + getNumberOfStudents());
//Candy helper optional