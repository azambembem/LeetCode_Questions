const array_PairSum = (nums) => {
  let result = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};
console.log(array_PairSum([1, 4, 3, 2]));
console.log(array_PairSum([6, 2, 6, 5, 1, 2]));
