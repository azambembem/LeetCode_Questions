var countSegments = function (s) {
  let count = 0;
  let inSegment = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (!inSegment) {
        count++;
        inSegment = true;
      }
    } else {
      inSegment = false;
    }
  }

  return count;
};

console.log(countSegments("Hello, my name is John"));
console.log(countSegments("Hello"));
