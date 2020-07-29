const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {

    var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

    function fromListToObject(arr) {

 var newObject = {};
 
for(let ind =0;ind<arr.length;ind++)

 {

     newObject[arr[ind][0]]=arr[ind][1];

 }

 
 console.log(newObject);

}

fromListToObject(arr);


});
