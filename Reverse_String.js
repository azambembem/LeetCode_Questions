var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};
console.log(reverseString(((s = "abcdefg"), (k = 2))));
console.log(reverseString(((s = "abcd"), (k = 2))));
