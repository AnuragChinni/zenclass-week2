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
 function powersOfTwo(n){
      
  let arr=[];
        
for(let ind = 0;ind<=n;ind++)
        
{
            
arr.push(2**ind);
        
}
    
return arr;

}

console.log(powersOfTwo(2));

});