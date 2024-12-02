const class07Students = [];
function addStudentToClass(studentName) {
  const criteriaToPass = {
    isExist: class07Students.includes(studentName),
    isLarger: class07Students.length >= 6,
    isEmpty: studentName === "" || studentName === " ",
    isQueen: studentName === "Queen",
    isString: typeof studentName !== "string",
  };

  if (criteriaToPass.isString) {
    return "Only strings are allowed.";
  }
  if (criteriaToPass.isEmpty) {
    return `Error: your student name is not acceptable.`;
  }
  if (criteriaToPass.isExist) {
    return `Student ${studentName} is already in the class`;
  }
  if (criteriaToPass.isQueen) {
    class07Students.push(studentName);
    return `it is an honor to have the ${studentName} in class 07`;
  }
  if (criteriaToPass.isLarger) {
    return `Student ${studentName} can not be added. no more space`;
  }

  class07Students.push(studentName);
  return `${studentName} has been added to class 07`;
}

console.log(addStudentToClass("jalil"));
console.log(addStudentToClass("Ahmad"));
console.log(addStudentToClass("Reza"));
console.log(addStudentToClass("MOhammad"));
console.log(addStudentToClass("Panjs"));
console.log(addStudentToClass("Shafiq"));
console.log(addStudentToClass("Farhad"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass(" "));
console.log(addStudentToClass(""));
console.log(addStudentToClass(5));
console.log(class07Students);
