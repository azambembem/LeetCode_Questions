var hammingWeight = (n) => {
  let aa = n.toString(2);
  let result = 0;
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] == 1) result++;
  }

  return result;
};
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
