//Q1

class Student {
    constructor (firstName, lastName, age, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }

    getInfo(){
        return JSON.stringify(this);
    }
    static getInstance(str){
        return JSON.parse(str);
    }
}

let studentDetails = new Student ("tom", "dan", 34, [67,85,76,75,87]);
let studentString = studentDetails.getInfo();
console.log("student Object ins String " + studentString);

let studentInstance = Student.getInstance(studentString);
console.log("student Instance  in " + JSON.stringify(studentInstance));


//Q2
