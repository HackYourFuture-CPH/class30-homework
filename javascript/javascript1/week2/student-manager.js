const class07Students = [];

function addStudentToClass(studentName) {
   
  if (studentName.toLowerCase === 'Queen'){
    class07Students.push(studentName);
   }
  
   else if (studentName === ''){
    console.log(`Please inter your name!`);
   }
   
   else if (class07Students.length >= 6)
     console.log(`Cannot add more students to class 07`);
   
   else if (class07Students.includes(studentName)){
    console.log(`Student ${studentName} is already in the class`);
    }
  
    else class07Students.push(studentName);                                        
}

function getNumberOfStudents() {
  return class07Students.length;
}