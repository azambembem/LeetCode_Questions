var longest_Common_Prefix = function (prefix) {
  if (!prefix.length) return "";
  for (let i = 0; i < prefix[0].length; i++) {
    // i = f, l, o, w, e, r
    for (let s of prefix) {
      // s = flower, flow, flight
      if (s[i] !== prefix[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return prefix[0];
};

console.log(longest_Common_Prefix(["flower", "flow", "flight"]));
console.log(longest_Common_Prefix(["dog", "racecar", "car"]));
console.log(longest_Common_Prefix(["break", "bring", "broken"]));
