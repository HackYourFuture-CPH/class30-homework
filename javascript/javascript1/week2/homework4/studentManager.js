const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === '' || studentName === undefined) {
        return `A student name is missing.`;
      }
    
      if (class07Students.includes(studentName)) {
        return `${studentName} is already in the class.`;
      }
    
      if (class07Students.length >= 7 && studentName !== 'Margarethe') {
        return `Cannot add more students to class 07. You cannot add ${studentName}.`;
      }
    
      class07Students.push(studentName);
      return `${studentName} has been added to the class.`;

}

//Testing values
/*
addStudentToClass('Paul')
console.log(class07Students)
addStudentToClass('Paul')
getNumberOfStudents()
addStudentToClass('Chani')
addStudentToClass('Jessica')
addStudentToClass('Leto')
getNumberOfStudents()
addStudentToClass('Duncan')
addStudentToClass('')
addStudentToClass()
getNumberOfStudents()
addStudentToClass('Stilgar')
addStudentToClass('Gurney')
addStudentToClass('Harkonen')
addStudentToClass('Margarethe')
getNumberOfStudents()
*/

function getNumberOfStudents() {
  return number = class07Students.length
}