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


function getLastElement(array){

 let len = array.length;

 if(len===0)
 
return(undefined);
 
else
 return(array[len-1]);

}

console.log(getLastElement([55,66,77,88]));

});