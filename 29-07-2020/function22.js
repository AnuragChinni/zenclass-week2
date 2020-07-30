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


var obj = {
 mykey: 'value'
};

function getProperty(obj, key) 
{
 
console.log(obj[key]);

}

let obj1 = getProperty(obj,"mykey");


});