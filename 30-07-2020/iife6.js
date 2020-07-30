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


  let arr=[20,35,47,86];
  
  let arr1 = [10,15,38,42];
    
(function(a,b)
 
   {
 
       if(a.length%2===0)
    
console.log(a[(a.length/2)-1],a[a.length/2],b[(a.length/2)-1],b[a.length/2]);
    
    
else
   
 console.log(a[(a.length-1)/2],b[(a.length-1)/2]);


    })
   
 (arr,arr1);
    
});