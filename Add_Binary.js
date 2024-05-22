var addBinary = (x, y) => {
  let sum = BigInt(`0b${x}`) + BigInt(`0b${y}`);
  return sum.toString(2);
};

console.log(addBinary((x = "11"), (y = "1")));
console.log(addBinary((x = "1010"), (y = "1011")));
