const str1 = 'Single';
const str2 = "Double";
const str3 = `Backticks`;

const rawName = "   aLex  ";
const cleanedName = rawName.trim().toLowerCase();

console.log(cleanedName.length);
console.log(cleanedName.includes("lex"));

const greeting = `Hello, ${cleanedName}!`;
console.log(greeting);