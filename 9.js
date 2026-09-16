function greet(name = "Guest") {
  return `Hello, ${name}`;
}

function logGreeting(name) {
  console.log(`Hello, ${name}`);
}

function noReturn() {}

const result = greet("Alice");
console.log(result);
console.log(logGreeting("Bob"));
console.log(noReturn());