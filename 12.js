const colors = ["red", "green"];
const [firstColor, secondColor] = colors;
const updatedColors = [...colors, "blue"];

const user = { name: "Emma", age: 30 };
const { name } = user;
const updatedUser = { ...user, age: 31 };

const constObj = { value: 1 };
constObj.value = 2;

const nested = { inner: { count: 1 } };
const shallowCopy = { ...nested };
shallowCopy.inner.count = 99;

console.log(firstColor, secondColor, updatedColors);
console.log(name, updatedUser);
console.log(constObj);
console.log(nested.inner.count);