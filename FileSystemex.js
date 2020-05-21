  // talk to the file
const path = require("path");
const fs = require("fs");


//Q1

function createMe (name, content){
   
    fs.writeFileSync(path.join(__dirname, name), content);

}
console.log(createMe("MyFile.txt", "My first file"))

//Q2
function readMe (filename) {
    let myText = fs.readFileSync(path.join(__dirname, filename));
    return myText.toString();
}


console.log(readMe("MyFile123.txt"));
