//for loop

//basic usage
let text = "";

/*for (let i = 1; i <= 10; i++) {
    text += "värdet är: " + i + ", ";
  }*/

for (let i = 1; i <= 10; i++) {
  text += i + ", ";
}

//console.log("värdet är: ", text);

//for loopen och arrays

const fruits = ["Apple", "Banana", "Orange", "Kiwi"];

/*for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/

const exocticFruits = [];
const domesticFruits = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    domesticFruits.push(fruits[i]);
  } else {
    exocticFruits.push(fruits[i]);
  }
}

/*for (let i = 0; i < fruits.length; i++) {
  switch (fruits[i]) {
    case "Apple":
      alert("Äpplen är fina");
      break;
    case "Banana":
      alert("Bananer blir fula efter en vecka");
      break;
    default:
      alert("Godis är godare!");
  }
}*/

//console.log("Exotic fruits: " + exocticFruits);
//console.log("Domestic fruits: ", domesticFruits);

//console.log(fruits[2]);

//for in - iterates over an objects properties

const person = {
  fname: "Christian",
  lname: "Johannesson",
  age: 31,
};

let personText = "";

for (let x in person) {
  personText += person[x] + " ";
}

console.log(personText);

let text2 = "";

for (let x in person) {
  switch (x) {
    case "fname":
      text2 += "Firstname: " + person[x] + "<br>";
      break;
    case "lname":
      text2 += "Lastname: " + person[x] + "<br>";
      break;
    case "age":
      text2 += "Age: " + person[x] + "<br>";
      break;
    default:
      text2 += "I don't know what to do";
  }
}

document.getElementById("text-box").innerHTML = text2;

//for of - iterates over an iterable data structure such as strings

const greeting = "Hello, my name is Christian, I like JavaScript";

let greetingFormatted = "";

/*for (let x of greeting) {
  if (x === ",") {
    greetingFormatted += ", <br>";
  } else {
    greetingFormatted += x;
  }
}*/

for (let x of greeting) {
  switch (x) {
    case ",":
      greetingFormatted += ", <br>";
      break;
    default:
      greetingFormatted += x;
  }
}

document.getElementById("greeting-box").innerHTML = greetingFormatted;

//while - runs a block of code over and over as long as a certain condition is true
let i = 0;
while (i < 10) {
  console.log("wohooooo");
  i++;
}

const dogs = ["Golden retriever", "Tax", "Border collie", "Schäfer"];

let j = 0;

while (j < dogs.length) {
  if (dogs[j] === "Tax") {
    alert("I'm a sausage");
  } else {
    alert("I like sausage");
  }
  j++;
}

//do while - same as while but runs block once before checking condition to run again

let k = 0;

do {
  console.log("Wooohooooo");
  k++;
} while (k < 20);

let l = 0;

do {
  switch (dogs[l]) {
    case "Golden retriever":
      console.log("I'm fluffy");
      break;
    case "Tax":
      console.log("I'm sometimes fluffy");
      break;
    case "Border collie":
      console.log("I'm fluffy too!");
      break;
    default:
      console.log("Dogs are epic!");
  }
  l++;
} while (l < dogs.length);
