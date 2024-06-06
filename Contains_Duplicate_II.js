function containsNearbyDuplicate(nums, k) {
  const indexs = new Map();
  for (let i = 0; i < nums.length; i++) {
    const recentIndex = indexs.has(nums[i]) ? indexs.get(nums[i]) : -100001;
    if (i - recentIndex <= k) {
      return true;
    }

    indexs.set(nums[i], i);
  }
  return false;
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
