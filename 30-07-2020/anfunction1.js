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
 
   let abc= function(a,b)
  
  {

let abc = function(b)

{
    
var oddarr=[];
   
 for(let ind=0;ind<b.length;ind++)
    
{
      
  if(b[ind]%2!==0)
       
 oddarr.push(b[ind]);
    
}
    
return oddarr;

};

let arr = [20,35,42,57,77,68,40];
  
  console.log(abc(arr));
    

});