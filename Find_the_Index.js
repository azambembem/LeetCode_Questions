var Str = (haystack, needle) => {
  if (!needle.length) return 0;
  if (!haystack.includes(needle)) return -1;
  return haystack.split(`${needle}`)[0].length;
};

console.log(Str((haystack = "sadbutsad"), (needle = "sad")));
console.log(Str((haystack = "leetcode"), (needle = "leeto")));
