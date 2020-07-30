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
function lessThan100(num1,num2) {
  
  if((+num1 + +num2)<100)
 
   console.log(true);
 
   else
  
  console.log(false);

}

var res = lessThan100(22,15);


});