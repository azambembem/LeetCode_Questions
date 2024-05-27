var convertToTitle = (columnNumber) => {
  let res = "";

  for (columnNumber > 0; columnNumber--; ) {
    res = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return res;
};

console.log(convertToTitle((columnNumber = 1)));
console.log(convertToTitle((columnNumber = 28)));
console.log(convertToTitle((columnNumber = 701)));
