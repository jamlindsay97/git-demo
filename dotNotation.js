console.log("Hello world!");

console.log("hello".toUpperCase());

console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));

console.log("Day One Activities");

//Activity 1

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

console.log(" ");
console.log(" ");
console.log(" ");

let grid = ["   |   |   ", "-----------"];
for (x = 0; x < 3; x++) {
  console.log(grid[0]);
}
console.log(grid[1]);
for (x = 0; x < 3; x++) {
  console.log(grid[0]);
}
console.log(grid[1]);
for (x = 0; x < 3; x++) {
  console.log(grid[0]);
}

//Activity 2

console.log("All Around the world");

let str = "All Around the world";
console.log("All Around the world".charAt(7).toUpperCase());

let char = str.slice(7, 8);
console.log(char);

//Activity 3 
let i = 10;
console.log(i);

i = i + 2;
console.log(i);

i += 2;
console.log(i);

//Activity 4

let favouriteDrink = "Coke";

console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);

let name = "James";
let age = 25;

console.log(
  `Hi my name is ${name}. I am ${age} years old and my favourite drink is ${favouriteDrink}.`
);
