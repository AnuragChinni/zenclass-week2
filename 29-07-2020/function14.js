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
function isEven(num)
{

 if(num%2===0)

 {
    
 console.log(true);

 }
 
 
else

 console.log(false);

}

var even = isEven(5);

});