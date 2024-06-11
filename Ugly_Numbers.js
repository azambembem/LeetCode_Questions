function isUgly(num) {
  if (num <= 0) return false;
  let factors = [2, 3, 5];
  for (let factor of factors) {
    while (num % factor === 0) {
      num /= factor;
    }
  }
  return num === 1;
}

function uglyNumbers(n) {
  let ugly = [1];
  let in2 = 0;
  let in3 = 0;
  let in5 = 0;

  for (let i = 1; i < n; i++) {
    let ug2 = ugly[in2] * 2;
    let ug3 = ugly[in3] * 3;
    let ug5 = ugly[in5] * 5;
    let num = Math.min(ug2, ug3, ug5);
    ugly.push(num);

    if (num === ug2) in2++;
    if (num === ug3) in3++;
    if (num === ug5) in5++;
  }

  return ugly[n - 1];
}

function testSolution(param_1) {
  if (typeof param_1 === "number") {
    return uglyNumbers(param_1);
  } else if (typeof param_1 === "object" && param_1.length === 1) {
    return isUgly(param_1[0]);
  }
  return null;
}

console.log(testSolution(10));
console.log(testSolution(6));
console.log(testSolution(14));
