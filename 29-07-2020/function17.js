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


function getLengthOfWord(word1)
{

 let word=word1.split('');
 
console.log(word.length);

}

let char = getLengthOfWord("anurag");

});