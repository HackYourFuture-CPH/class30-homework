const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

    if (studentName === "") {
        return "You should add a name";
    }

    if (studentName === "Queen") {
        class07Students.push("Queen");
        return;
      }

    else if (studentName !== "Queen" && class07Students.length >= 6) {
        return "Max slots are reached";
    }
    

    else if (class07Students.length < 6 && !class07Students.includes(studentName) ) {
        class07Students.push(studentName);
    }

    
}


    function getNumberOfStudents() {
        return class07Students.length;
    }


    addStudentToClass("John"); // Agregar un estudiante
    addStudentToClass("Alice"); // Agregar otro estudiante
    
    console.log(getNumberOfStudents()); // Debería devolver 2, ya que hemos agregado dos estudiantes
    


