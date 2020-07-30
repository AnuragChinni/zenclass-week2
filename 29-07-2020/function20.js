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


function getNthElement(array,n)
{
 
return array[n];

}

console.log(getNthElement([34,45,56],1));

});