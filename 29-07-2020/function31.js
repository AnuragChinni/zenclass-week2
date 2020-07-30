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
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));

 function sumCSV(s)
{
 
 let arr = s.split(",").map(val => +val);
  
let sum = 0;
  
for(let ind=0;ind<arr.length;ind++)

  {
    
  sum+=arr[ind];

  }
  
return sum;

}


});
