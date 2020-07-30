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

    
function areBothOdd(num1, num2)
{

 if(num1%2!==0 && num2%2!==0)
 
console.log(true);
 
else

 console.log(false);

}

let ood=areBothOdd(3,3);

});