const isPowerOfTwo = function (n) {
  if (n === 1) return true;

  let result = 1;

  while (true) {
    result *= 2;

    if (result === n) return true;
    else if (result > n) return false;
  }
};
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
