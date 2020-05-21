// const uuid = require("uuid");
// const fs = require("fs");
// const path = require("path");
// const Person = require("./Person");
// const Teacher = require("./Teacher");
// const StudentDataReader = require("./StudentDataReader");
 //const Random = require("./Random");


// const path = require("path");
// const StudentDataReader = require("./StudentDataReader");

// let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));

// console.log(_studentData.getStudent('239e4486-1bef-443c-8cb1-8ba6f7d34abf'));


const path = require("path");
const StudentDataReader = require("./dailyChallenge");

let _teacherData = new StudentDataReader(path.join(__dirname, "Teachers.json"));

console.log(_teacherData.getTeacher('baac8ff3-2392-4a15-89f6-f157dc684ca8'));




// let teachers = Teacher.generateRandomPeople(10);
// let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));


// console.log(teachers);
// console.log(students);
// console.log(teachers[0].getMyStudents(students));
// console.log(students[0].getTeacher(teachers));

// fs.writeFileSync(path.join(__dirname, "Teachers.json"), JSON.stringify(teachers));
// fs.writeFileSync(path.join(__dirname, "Students.json"), JSON.stringify(students));