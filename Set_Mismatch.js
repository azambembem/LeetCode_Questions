const findErrorNums = function (nums) {
  const ans = new Array(2);
  const count = new Array(nums.length + 1).fill(0);

  for (let num of nums) {
    count[num]++;
  }

  for (let i = 1; i < count.length; i++) {
    if (count[i] === 2) {
      ans[0] = i;
    } else if (count[i] === 0) {
      ans[1] = i;
    }
  }

  return ans;
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
