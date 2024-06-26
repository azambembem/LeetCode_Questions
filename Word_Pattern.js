var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");

  if (pattern.length !== sArr.length) {
    return false;
  }

  const patternMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    patternMap.set(pattern[i], i);
    sMap.set(sArr[i], i);
  }

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.get(pattern[i]) !== sMap.get(sArr[i])) {
      return false;
    }
  }

  return true;
};
console.log(wordPattern((pattern = "abba"), (s = "dog cat cat dog")));
console.log(wordPattern((pattern = "abba"), (s = "dog cat cat fish")));
console.log(wordPattern((pattern = "aaaa"), (s = "dog cat cat dog")));
