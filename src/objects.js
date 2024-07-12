var student = {
  firstname: "Sujeet"
};
// student.firstname = "Kumar";
// console.log(student);
//immutable

var newStudent = {
  ...student,
  firstname: "Kumar",
  age: 26
};
console.log(student);
console.log(newStudent);
