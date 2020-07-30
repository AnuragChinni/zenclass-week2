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
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var ar2 =function getPositives(ar){

    let arr =[];
 
   for(let ind = 0;ind<ar.length;ind++)

    {
        if(ar[ind]>0)
  
      arr.push(ar[ind]);
 
   }
   
 return arr;


};

console.log(ar2(ar));

});