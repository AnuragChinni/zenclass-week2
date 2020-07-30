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
  let arr =[10,20,30,40,50];
   
rot=function(a,k){
        
    
    let len = a.length;
    
    let mod = k%len;
   
     if(mod===0)
     
   return console.log(a);
        
      
 let arr1 = arr.splice(mod,a.length-1);
        
let arr2=arr.splice(0,mod);
        
        
console.log(arr1.concat(arr2));
     
   
    };
   
 rot(arr,2);

});
