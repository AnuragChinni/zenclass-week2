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



var hr = 3;

function hourToSeconds(hr) 
{
    
console.log(hr*3600);

}

var data = hourToSeconds(hr);
});