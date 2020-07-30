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
 var ar1 = [1, 2, 3];

var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);


console.log(ar);

function mergeArrays(ar1, ar2)

{
 let len = ar1.length;

 for(let ind=len;ind<ar2.length+len;ind++)
 
{
     ar1[ind]=ar2[ind-len];

 }
 
return ar1;

}

});