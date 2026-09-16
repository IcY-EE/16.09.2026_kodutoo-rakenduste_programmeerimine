const fixed = 10;
let changeable = 5;
changeable = 20;

var oldVar = "function scoped";

if (true) {
  var varInsideBlock = "accessible outside";
  let letInsideBlock = "block scoped";
  const constInsideBlock = "block scoped";
}

console.log(fixed);
console.log(changeable);
console.log(varInsideBlock);