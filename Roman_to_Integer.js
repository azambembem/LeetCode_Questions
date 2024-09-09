const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanTo = function (x) {
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    const current = roman[x[i]];
    const next = roman[x[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
      continue;
    }

    result += current;
  }
  return result;
};
console.log(romanTo("III")); // 출력 3
console.log(romanTo("LVIII")); // 출력 58
console.log(romanTo("MCMXCIV")); // 출력 1994
