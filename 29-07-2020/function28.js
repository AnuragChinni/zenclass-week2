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
function findMax(ar)
{
     
let max =ar[0];

    ar.map(val => +val);


for(let ind=0;ind<ar.length;ind++)

{

    if(ar[ind]>max)

    max =ar[ind];

   
}

 return max;

}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];


console.log(findMax(ar));

});