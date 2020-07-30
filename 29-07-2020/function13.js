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
function divisibleByFive(num1)
 
   {

        if(num1%5===0)

        console.log(true);
  
      else
 
       console.log(false);

    }
 
   var divisible = divisibleByFive(5);

});