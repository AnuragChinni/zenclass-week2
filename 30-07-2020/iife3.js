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
let arr=[10,25,36,42,78,91];
    
(function(a)
 
   {
     
   var sum = 0;
        
for(let ind =0;ind<a.length;ind++)
       
 {
          
  sum+=a[ind];
        
}

      
  console.log(sum);
  
  })
 
   (arr);

});