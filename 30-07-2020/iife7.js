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
 let arr=[10,20,30,10,30,40];
    
(function(a)
    
{
      
  let arr1=[];
       
 a.map(val => +val);
        
for(let ind=0;ind<arr.length;ind++)
       
 {
            
if(arr1.indexOf(a[ind])===-1)
       
 arr1.push(a[ind]);
      
  }
       
 console.log(arr1);
 
   })
    
(arr);
    
});