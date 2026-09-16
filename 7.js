const names = ["Anna", "Bob", "Charlie"];

console.log(names[0]);
console.log(names.length);

console.log(names.includes("Bob"));
names.push("David");
names.pop();

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Bob") break;
  console.log(names[i]);
}

for (const name of names) {
  console.log(name);
}