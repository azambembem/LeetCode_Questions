var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let res = 0;
  let a = 0,
    b = 1;

  for (let i = 0; i < n - 1; i++) {
    res = a + b;
    a = b;
    b = res;
  }

  return res;
};
console.log();

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
