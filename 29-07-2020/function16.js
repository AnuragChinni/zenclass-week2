const readline = require('readline');

const inp = readline.createInterface
({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {

function getFullName(firstName, lastName){

 let arr=[];
 
arr[0] = firstName;

  arr[1] = lastName;
  
console.log(arr.join(" "));

}

let name = getFullName("anurag","chinni");

});