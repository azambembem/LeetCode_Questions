var isIsomorphic = function (s, t) {
  const sToT = Array(256).fill(-1);
  const tToS = Array(256).fill(-1);
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const sChar = s.charCodeAt(i);
    const tChar = t.charCodeAt(i);

    if (sToT[sChar] === -1 && tToS[tChar] === -1) {
      sToT[sChar] = tChar;
      tToS[tChar] = sChar;
    } else {
      if (sToT[sChar] !== tChar || tToS[tChar] !== sChar) {
        return false;
      }
    }
  }

  return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
