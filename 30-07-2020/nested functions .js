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

        var num1=80;

        var num2 =30;

        return (b[a](num1,num2));

         
        
        
    };

    let ops =[];

     add = function(a,b)

    {

        return(a+b);
  
  };
 
    sub = function(a,b)
 
   {
 
       return(a-b);

    };
 
    mul = function(a,b)

    {
    
    return(a*b);

    };

    ops[0] = add;
 
   ops[1] = sub;
  
  ops[2] =mul;
  
 for(let ind = 0;ind<3;ind++)

   {

console.log(abc(ind,ops));

}