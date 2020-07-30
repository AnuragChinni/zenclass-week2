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



    let arr=["madam","anurag","civic","level"];
   
 let par =  function(a){
      
  let arr1=[];
     
   for(let ind =0;ind<arr.length;ind++)
       
 {
            
          
 arr1.push(a[ind].split('').reverse().join('')); 
      
  }
       
 for(let inc=0;inc<arr.length;inc++)
      
  {
          
  if(arr[inc]===arr1[inc])
          
  console.log(arr1[inc]);
       
 }
        
 
   };
   
 par(arr);

});