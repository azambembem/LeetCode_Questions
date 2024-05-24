var climbStairs = (n) => {
  if (n < 3) return n;
  let a = 1,
    b = 2,
    next;

  for (let i = 3; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
};
console.log(climbStairs(2));
console.log(climbStairs(3));
