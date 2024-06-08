var addDigits = (num) => {
  num = String(num);
  while (num.length > 1) {
    num = String(num.split("").reduce((acc, el) => acc + Number(el), 0));
  }
  return Number(num);
};

console.log(addDigits(38));
console.log(addDigits(0));
