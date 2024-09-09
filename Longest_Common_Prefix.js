var longest_Common_Prefix = function (prefix) {
  // If the prefix contains 0 length
  if (!prefix.length) return "";

  // If the prefix contains 1 length
  for (let i = 0; i < prefix[0].length; i++)
    for (let s of prefix) if (s[i] !== prefix[0][i]) return s.slice(0, i);

  return prefix[0];
};

console.log(longest_Common_Prefix(["flower", "flow", "flight"]));
console.log(longest_Common_Prefix(["dog", "racecar", "car"]));
console.log(longest_Common_Prefix(["break", "bring", "broken"]));

// slice

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // [ 'e', 's' ]
// // 인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외)

// console.log( arr.slice(-2) ); // [ 's', 't' ]
// // 인덱스가 -2인 요소부터 제일 끝 요소까지를 복사
