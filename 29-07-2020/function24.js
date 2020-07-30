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


function removeProperty(obj, key){

 delete obj[key];
 
return obj;

}

let obj={
  
  name:"anurag",

    edu:"B.E"

};

console.log(removeProperty(obj,"edu"));

});