var summaryRanges = (nums) => {
  let res = [];
  let start = null;
  for (let i = 0; i < nums.length; i++) {
    if (start === null) start = nums[i];
    if (nums[i] === nums[i + 1] - 1) continue;
    if (nums[i] === start) {
      res.push(`${start}`);
    } else {
      res.push(`${start}->${nums[i]}`);
    }
    start = null;
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([[0, 2, 3, 4, 6, 8, 9]]));
