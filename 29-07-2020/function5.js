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


var myint = 0;

function nextNumber(myint)

{
    
console.log(+myint+1)

}

var myNextint = nextNumber(myint);
});