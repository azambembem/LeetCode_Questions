function findComplement(num) {
  let numStr = num.toString(2);
  let complementStr = "";

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "0") {
      complementStr += "1";
    } else {
      complementStr += "0";
    }
  }

  return parseInt(complementStr, 2);
}

console.log(findComplement(5));
console.log(findComplement(1));
