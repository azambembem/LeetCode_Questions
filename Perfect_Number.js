var checkPerfectNumber = (num) => {
  var primes = [2, 3, 5, 7, 13, 17, 19, 31];

  for (var prime of primes) {
    var perfectNumber = Math.pow(2, prime - 1) * (Math.pow(2, prime) - 1);

    if (perfectNumber === num) {
      return true;
    } else if (perfectNumber > num) {
      return false;
    }
  }

  return false;
};
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
