const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName === ''){
        return 'Please enter your name.';
    }else if(class07Students.includes(studentName)){
        return 'Student ' + studentName + ' is already in the class.';
    }else if(studentName === 'the Queen') {
        class07Students.push(studentName);
        return class07Students;
    }else if(class07Students.length < 6) {
        class07Students.push(studentName)
        return class07Students;
    }else return'Cannot add more students to class 07';
}

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(addStudentToClass('Anne'));
console.log(addStudentToClass('Peter'));
console.log(addStudentToClass('Alex'));
console.log(addStudentToClass('Ceci'));
console.log(addStudentToClass(''));
console.log(addStudentToClass('Alice'));
console.log(addStudentToClass('Mike'));
console.log(addStudentToClass('Alice'));
console.log(addStudentToClass('the Queen'));
console.log('There are ' + getNumberOfStudents() + ' students in the class.')