const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Mouse", price: 25 }
];

const productNames = products.map(product => product.name);
const expensiveProducts = products.filter(product => product.price > 100);
const laptop = products.find(product => product.name === "Laptop");
const missing = products.find(product => product.name === "Tablet");

console.log(productNames);
console.log(expensiveProducts);
console.log(laptop);
console.log(missing);