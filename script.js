/* @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let passedStudents = arr.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {id:4, name:"susan", age:20, marks:45};
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let newarray = arr.filter(student => student.marks >= 50);
  console.log(newarray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = [{id:5, name:"tim", age:19, marks:60},
                       {id:6, name:"jessica", age:21, marks:70},
                       {id:7, name:"mark", age:18, marks:80}];
  let concatenatedArray = arr.concat(newStudents);
  console.log(concatenatedArray);
}
