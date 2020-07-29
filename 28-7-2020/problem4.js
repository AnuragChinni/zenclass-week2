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
  
      "hasPets" : true

        
    };

    
    function printAllValues(obj)
 {

 console.log(Object.keys(obj));

}

printAllValues(obj);

});
