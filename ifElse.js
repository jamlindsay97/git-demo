if (1 === "1") {
  console.log(true);
} else {
  console.log(false);
}

if (1 != "1") {
  console.log(true);
} else {
  console.log(false);
}

if (1 !== "1") {
  console.log(true);
} else {
  console.log(false);
}

let place = "Manchester";
let weather = "cloudy";

if (place == "Manchester" && weather == "sunny") {
  console.log("Look again");
} else if (place == "Manchester" && weather == "rainy") {
  console.log("Obviously");
} else {
  console.log("Why isn't it raining?");
}

let day = "Saturday";

console.log(`It's a ${day}.`);
if (day == "Saturday" || day == "Sunday") {
  console.log("Ladies and gentlemen, the weekend! *cheering*");
} else {
  console.log("Ladies and gentlemen, the week. *booing*");
}

console.log("If/Else Activities");

//Activity 1

age = 20;

console.log(age);
if (age > 17) {
  console.log("Yes I can serve you, what would you like?");
} else {
  console.log("I'm sorry you're not old enough.");
}

let country = "America";

if (age > 17 && country == "UK") {
  console.log("Yes I can serve you, what would you like?");
} else if (age > 20 && country == "America") {
  console.log("Yes I can serve you, what would you like?");
} else {
  console.log("I'm sorry you're not old enough.");
}

//Activity 2

let topping = "pineapple";

switch (topping) {
  case "ham":
  case "cheese":
  case "jalepinos":
    console.log("This is one of the best pizza toppings");
    break;
  case "pepperoni":
  case "peppers":
  case "bacon":
    console.log("I don't mind having this on a pizza");
    break;
  case "pineapple":
  case "mushrooms":
    console.log("This doesn't belong on a pizza");
}

//Activity 3

let password = "ThisIsAPassword123";
let len = password.length;
if (len >= 8) {
  console.log(password);
} else {
  console.log("Your password is too short.");
}

//Activity 4

let num = 12;
if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("This number is not divisible by 3 or 5");
}

//Activity 5

num = 12;
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Fizzbuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

//Activity 6

let palNum = 30303;
let numReverse = palNum.toString().split("").reverse().join("");

if (palNum == numReverse) {
  console.log(`${palNum} is a palindrome.`);
} else {
  console.log(`${palNum} is not a palindrome.`);
}

//Activity 7

let placeOfWork = "the Gardeners Arms";
let townOfHome = "Altrincham";
let time = 13;

if (time < 10 || time > 19) {
  console.log(`I'm at home in ${townOfHome}.`);
} else if (time > 10 || time < 19) {
  console.log(`I'm at work at ${placeOfWork}.`);
} else if (time === 10) {
  console.log("I'm heading to work.");
} else if (time === 19) {
  console.log("I'm heading home from work.");
}

//Activity 8

const string =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let lastVowel = [
  string.lastIndexOf("a"),
  string.lastIndexOf("e"),
  string.lastIndexOf("i"),
  string.lastIndexOf("o"),
  string.lastIndexOf("u"),
];
let result = Math.max(...lastVowel);

console.log(
  `The index of the last vowel in the string "${string}" is ${result}.`
);

//Activity 9

