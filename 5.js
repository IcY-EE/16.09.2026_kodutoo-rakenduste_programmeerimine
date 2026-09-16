console.log(5 === "5");
console.log(5 == "5");
console.log(5 !== 3, 10 > 5, 4 < 8, 5 >= 5, 2 <= 3);

console.log(Boolean(""), Boolean(0), Boolean(null), Boolean(undefined));

const age = 20;
const isLoggedIn = true;

if (isLoggedIn && age >= 18) {
  console.log("Access granted");
} else if (isLoggedIn && age < 18) {
  console.log("Underage user");
} else {
  console.log("Please log in");
}

const message = isLoggedIn ? "Welcome back" : "Please log in";
console.log(message);