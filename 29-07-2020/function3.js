const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {


var min = 3;

function toSeconds(min) {
   
 console.log (60*min);

    
}

var secs = toSeconds(min);



});
