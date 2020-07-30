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
    let len = arr.length;
    let count =0;
    let neg = [];
    let sum =0;
    let arr1 = [];
    for(let ind=0;ind<len;ind++)
    {
        if(arr[ind]>0)
        count+=1;
        else
        neg.push(arr[ind]);
    }
    for(let inx=1;inx<neg.len;inx++)
 
   {
      sum = sum + parseInt(neg[inx]);  
    }
    
arr1[0]=count;
   
 arr1[1]=sum;
    
 
   return arr.join(" ");
 
};

console.log(ar2(arr));

});