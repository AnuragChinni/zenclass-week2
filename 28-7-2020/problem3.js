const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {
 userInput.push(data);

});

inp.on("close", () => {

 
   var obj = {

        "name" : "RajiniKanth",

        "age" : 33,
  
      "hasPets" : false

        
    };

    
    function printAllValues(obj)
 {

 console.log(Object.values(obj));

}

printAllValues(obj);

});
