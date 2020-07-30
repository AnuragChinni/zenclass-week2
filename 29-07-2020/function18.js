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


function isSameLength(word1, word2)
{

 if(word1.split('').length==word2.split('').length)
 
console.log(true);

 else
 
console.log(false);

}

let name = isSameLength("anurag","chinni");

});