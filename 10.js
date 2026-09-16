const doubleImplicit = x => x * 2;

const doubleExplicit = x => {
  return x * 2;
};

console.log(doubleImplicit(4));
console.log(doubleExplicit(4));

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 10));