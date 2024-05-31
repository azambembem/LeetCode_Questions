let letterCombinations = function (digits) {
  let result = [];
  let temp = [];
  let letters = [
    [""],
    [""],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ];
  let maxLevel = digits.length;

  if (maxLevel === 0) {
    return result;
  }

  function DFS(L) {
    if (L === maxLevel) {
      let resultpush = temp.join("");
      if (resultpush !== "") {
        result.push(resultpush);
      }
    } else {
      let currentDigit = digits[L];
      let currentLetters = letters[currentDigit];
      for (let i = 0; i < currentLetters.length; i++) {
        temp.push(currentLetters[i]);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(0);
  return result;
};

const exampleDigits = "23";
console.log(letterCombinations(exampleDigits));
