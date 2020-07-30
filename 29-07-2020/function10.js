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
function remainder(num1,num2)
 {

    console.log(num1%num2);

}

var res = remainder(1,3);

});