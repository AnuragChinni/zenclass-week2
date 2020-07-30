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
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

 var ar2 = function countPositivesSumNegatives(arr) {

 let arr1=[];

 let count =0;
 
let sum =0;
 
let array =[];

 for(let ind = 0;ind<arr.length;ind++)

 {
   
  if(arr[ind]>0)
     
count+=1;
     
else
   
  arr1.push(arr[ind]);

 }

 for(let inx=0;inx<arr1.length;inx++)
 
{

     sum+=arr1[inx];
 }
 
array[0]=count;


 array[1] = sum;
 
return(array.join(" "));

};

console.log(ar2(arr));

});