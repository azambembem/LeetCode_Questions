var singleNumber = (nums) => {
  let result = "";
  nums.forEach((num) => {
    if (
      nums.indexOf(num) === nums.lastIndexOf(num) &&
      nums.indexOf(num) !== -1
    ) {
      result = num;
    }
  });
  return result;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
