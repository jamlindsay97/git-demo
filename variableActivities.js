//Activity 1

let name = "James";
let age = 25;
let favColour = "blue";

console.log(
  `Hello my name is ${name}. I am ${age} years old and my favourite colour is ${favColour}.`
);

name = "Bob";
age = 40;
favColour = "purple";

console.log(
  `Hello my name is ${name}. I am ${age} years old and my favourite colour is ${favColour}.`
);

//Activity 2

let breakfast = "crumpets";
let lunch = "ham sandwich";
let dinner = "spaghetti carbonara";

console.log(
  `This morning I had ${breakfast} for breakfast, a ${lunch} for lunch and ${dinner} for my tea.`
);

breakfast = "cornflakes";
lunch = "chicken wrap";
dinner = "Thai green curry";

console.log(
  `Tomorrow I will have ${breakfast} for my breakfast, a ${lunch} at lunchtime and I'm going to make ${dinner} for tea.`
);

//Activity 3

let today = new Date();
let birthday = new Date("1997,02,12");
let daysPassed = (today - birthday) / (1000 * 60 * 60 * 24);

console.log(birthday);
console.log(today);
console.log("It has been " + Math.floor(daysPassed) + " days since I was born");

//Activity 4

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");
