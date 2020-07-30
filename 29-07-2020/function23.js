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


var myobj ={};

function addProperty(obj, key){
 
 
    
obj["key"]=true;
    
return obj;

}

console.log(addProperty(myobj,"mykey"));

});