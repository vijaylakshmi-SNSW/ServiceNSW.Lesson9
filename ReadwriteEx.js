//Q1.Create a method that writes an array of students to a json file
const fs = require("fs"); 
const path = require("path");
const Student = require("./Student");

function studentArray(stuArr){
    fs.writeFileSync(path.join(__dirname, "studentArray.json"),JSON.stringify(stuArr));  
}

let array = [{ firstName: "Oliver", lastName: "Brown"}, { firstName: "James", lastName: "Brown"}];

studentArray (array);


 //Q2.Create a method that retrieves a list of students from a json file and returns them as student objects

function studArr(){
    let jsonRaw = fs.readFileSync(path.join(__dirname, "Students.json"));
    //console.log("jsonRaw"+jsonRaw);
    let array = JSON.parse(jsonRaw);
    //console.log("array"+array);
    let studentArr = array.map(studentRaw => new Student (
        studentRaw.firstName,
        studentRaw.lastName,
        studentRaw.age,
        studentRaw.grades,
        studentRaw.teacherId,
        studentRaw.id
    ));
    console.log("arrayjkkkk    "+JSON.stringify(studentArr));

    
    
}

studArr();








 