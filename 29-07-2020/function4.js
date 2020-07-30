const readline = require('readline');

const inp = readline.createInterface
({

  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => 
{
 userInput.push(data);

});

inp.on("close", () => 
{

var mystr = "10";

function toInteger(mystr) 
{

console.log(parseInt(mystr));  
  
}

var myint = toInteger(mystr);



});
