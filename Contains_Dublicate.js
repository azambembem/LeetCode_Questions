var containsDuplicate = (nums) => {
  const set = new Set(nums);

  if (set.size !== nums.length) {
    return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
