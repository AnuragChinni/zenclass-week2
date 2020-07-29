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
name: "ISRO",
 age: 35,
 role: "Scientist"
};

function convertListToObject(obj) {

 let key=Object.keys(obj);

 let val = Object.values(obj);

 let arr1 =[];

 let arr2 =[];

 let arr3 =[];

 let arr =[];

  arr1.push(key[0],val[0]);


 arr2.push(key[1],val[1]);

 arr3.push(key[2],val[2]);

 arr[0] = arr1;

 arr[1] = arr2;

 arr[2] = arr3;

 console.log(arr);

 
    
}

convertListToObject(obj);

});
