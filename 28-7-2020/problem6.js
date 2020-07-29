const readline = require('readline');

const inp = readline.createInterface({
 
 input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
var arr = ["GUVI", "I", "am", "a geek"];
 
   function transformFirstAndLast(arr) {

 
 let len = arr.length;

 let obj = {};

 obj[arr[0]] = arr[len-1];

 console.log(obj);

    
}

transformFirstAndLast(arr);


});