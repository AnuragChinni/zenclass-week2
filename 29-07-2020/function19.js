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


console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2)

{

return Math.sqrt(((y2-y1)*(y2-y1))+((x2-x1)*(x2-x1))) ;

}

});