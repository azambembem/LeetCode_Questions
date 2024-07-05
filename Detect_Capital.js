function detectCapitalUse(word) {
  if (word.length === 1) {
    return true;
  }

  let isFirstCapital = word.charAt(0) >= "A" && word.charAt(0) <= "Z";
  let isAllCapital =
    isFirstCapital && word.charAt(1) >= "A" && word.charAt(1) <= "Z";

  for (let i = 1; i < word.length; i++) {
    let c = word.charAt(i);
    if (isAllCapital) {
      if (c < "A" || c > "Z") return false;
    } else {
      if (c < "a" || c > "z") return false;
    }
  }
  return true;
}

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
