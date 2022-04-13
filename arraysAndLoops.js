let coffeeOrder = ["Alex- Cortado", "Ben- Cortado", "Michael- Whatever's new"];
console.log(coffeeOrder);
coffeeOrder[1] = "Shannon- Cappucino";
console.log(coffeeOrder);

console.log(coffeeOrder.length);

coffeeOrder.push("Charlie- Double espresso");
console.log(coffeeOrder);

coffeeOrder.pop();
console.log(coffeeOrder);

//Activity 1

let favSongs = [
  "He Is - Ghost",
  "Aerials - System of a Down",
  "Jeremy - Pearl Jam",
];

console.log(favSongs);

favSongs.push(
  "For Whom the Bell Tolls - Metallica",
  "Court of the Crimson King - King Crimson"
);
console.log(favSongs);

favSongs.pop();
console.log(favSongs);

//Activity 2

let fruit = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
console.log(fruit);
let removedItems = fruit.splice(3);
console.log(fruit);
console.log(removedItems);

//LOOPS

//let favDrinks = ["coke", "cider", "rum"];
//console.log(favDrinks[0]);
//console.log(favDrinks[1]);
//console.log(favDrinks[2]);

let favDrinks = ["coke", "cider", "spiced rum", "monster"];

for (let i = 0; i < favDrinks.length; i++) {
  console.log(favDrinks[i]);
}

let multiplesTwo = [];
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(`Numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`);

let age = 15;
while (age < 18) {
  console.log("You're a child");
  age++;
}
console.log("You're an adult");

let cards = ["diamond", "heart", "spade", "club"];
let currentCard = "club";

while (currentCard != "spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);

//Activity 1

let favFilms = [
  "Rocky Horror Picture Show",
  "Thor Ragnarok",
  "Akira",
  "Scream",
  "What We Do In The Shadows",
];
favFilms.push("Lord of the Rings", "Howl's Moving Castle");

for (let i = 0; i < favFilms.length; i++) {
  console.log(favFilms[i]);
}

//Activity 2

for (let i = 0; i < 6; i++) {
  let ranNum = 0;
  let endLoop = Math.floor(Math.random() * 50);
  for (let rn = 0; rn < endLoop; rn++) {
    ranNum++;
  }
  console.log(ranNum);
}

//Activity 3

let numList = 0;
while (numList <= 9) {
  console.log(numList);
  numList++;
}

let numList2 = 9;
while (numList2 >= 0) {
  console.log(numList2);
  numList2--;
}

//Activity 4

let movies = ["The Godfather", "Ghostbusters", "Hook", "Avengers"]

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
    if (i==[2])
        if (movies[i] == "Ghostbusters") {
            console.log("Yay, it's Ghostbusters!")
        }
        else {
            console.log("Boo! we want Ghostbusters!")
        } 
}

//Activity 5

for (let i = 0; i < 6; i++) {
    let ranNum2 = 0;
    let endLoop = Math.floor(Math.random() * 30);
    for (let rn = 0; rn < endLoop; rn++) {
      ranNum2++;
    }
        if (i % 7 == 0) {
            console.log("This is divisible by 7");
        }
        
    console.log(ranNum2);
  }

