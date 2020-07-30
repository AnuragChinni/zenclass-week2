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
let arr = [20,30,21,35,49,84];
   
(function(a)
  
 {
       
let oddarr=[];
    
   for(let ind =0;ind<a.length;ind++)
   
    {
           
if(a[ind]%2!==0)
       
    oddarr.push(a[ind]);
 
      }
      
 console.log(oddarr);
  
 }) (arr);
   
  

});