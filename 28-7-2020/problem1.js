const readline = require('readline');

const inp = readline.createInterface({
  
input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {


let sum =0;

var cat = {
 
name: 'Fluffy',

 activities: ['play', 'eat cat food'],
 
catFriends: [
 {
 
name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],

 weight: 8,

 furcolor: 'white'
 }, 

 {

 name: 'foo',

 activities: ['sleep', 'pre-sleep naps'],

 weight: 3

 }
]

};

cat['height']=5;

cat['weight']=7;

cat.name = 'fluffyy';

for(let ind=0;ind<cat.catFriends.length;ind++)

{


console.log(cat.catFriends[ind].name);

console.log(cat.catFriends[ind].activities);

sum+=cat.catFriends[ind].weight;


}

let acc1 = cat.activities.length;

let acc2 = cat.catFriends[0].activities.length;

let acc3 =cat.catFriends[1].activities.length;

cat.catFriends[0].activities.push('play','sleep');

cat.catFriends[1].activities.push('play','eat');

cat.catFriends[0].furcolor='black';

console.log(sum);

console.log(acc1+acc2+acc3);

console.log(cat.catFriends[0].activities);

console.log(cat.catFriends[1].activities);

console.log(cat);



});
