const findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
