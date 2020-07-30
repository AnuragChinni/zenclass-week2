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
 let arr = ["anurag","chinni"];
   
(function(a)

   {
    
   var caparr=[];
    
   for(let ind =0;ind<a.length;ind++)
      
 {
          
 caparr.push(a[ind].toUpperCase());
     
  }
    
   console.log(caparr.join(' '));
       
   
}) (arr);
   
  

});