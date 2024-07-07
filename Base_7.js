var convertToBase7 = function (num) {
  if (num === 0) return "0";

  let result = "";
  let isNegative = num < 0;
  num = Math.abs(num);

  while (num > 0) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }

  if (isNegative) {
    result = "-" + result;
  }

  return result;
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
