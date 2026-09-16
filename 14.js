const fetchData = () => {
  return new Promise((resolve) => {
    resolve("Data loaded");
  });
};

async function main() {
  const result = await fetchData();
  console.log(result);
  return result;
}

const returnedPromise = main();
console.log(returnedPromise);