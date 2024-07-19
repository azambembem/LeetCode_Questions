const maximumProduct = function (nums) {
  let len = nums.length;

  if (len === 0) return 0;
  if (len <= 3) {
    return nums.reduce((product, num) => product * num, 1);
  }

  nums.sort((a, b) => a - b);

  let max1 = nums[len - 1] * nums[len - 2] * nums[len - 3];
  let max2 = nums[0] * nums[1] * nums[len - 1];

  return Math.max(max1, max2);
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
