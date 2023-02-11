/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const passedStudents = students.map(student => {
    if (student.marks >= 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  students.forEach(student => {
    if (student.marks >= 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = {id:4, name:"susan", age:20, marks:45};
  students.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const updatedArray = students.filter(student => student.marks >= 50);
  console.log(updatedArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  const moreStudents = [
    {id:5, name:"emily", age:18, marks:70}, 
    {id:6, name:"mike", age:20, marks:65}, 
    {id:7, name:"jessica", age:19, marks:75}
  ];
  const combinedArray = students.concat(moreStudents);
  console.log(combinedArray);
}

