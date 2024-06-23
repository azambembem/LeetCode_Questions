var thirdMax = (nums) => {
  let maxValues = [null, null, null];

  for (let num of nums) {
    if (num === maxValues[0] || num === maxValues[1] || num === maxValues[2])
      continue;

    if (maxValues[0] === null || num > maxValues[0]) {
      maxValues = [num, maxValues[0], maxValues[1]];
    } else if (maxValues[1] === null || num > maxValues[1]) {
      maxValues = [maxValues[0], num, maxValues[1]];
    } else if (maxValues[2] === null || num > maxValues[2]) {
      maxValues = [maxValues[0], maxValues[1], num];
    }
  }

  return maxValues[2] === null ? maxValues[0] : maxValues[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
