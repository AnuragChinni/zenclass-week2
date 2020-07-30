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



var arr = [1, 2, 3];
function getFirstElement(arr)
 {
console.log(arr[0])
}
var data = getFirstElement(arr)



});