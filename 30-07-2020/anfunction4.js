const readline = require('readline');


const inp = readline.createInterface

({


  input: process.stdin

});


const userInput = [];


inp.on("line", (data) => 
{

 userInput.push(data);


});


inp.on("close", () => 
{

    let arr=[10,25,7,31,23];
    
prime = function(a){
    
    let arr1=[];
      
  for(let ind =0;ind<arr.length;ind++)
      
  {
         
   for(let inx=2;inx<a[ind];ind++)
         
   if(a[ind]%inx!==0)
           
 arr1.push(a[ind]);
    
    }
        
console.log(arr1);
 
   };
    
prime(arr);

});