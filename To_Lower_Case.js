const toLowerCase = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      answer += String.fromCharCode(s.charCodeAt(i) + 32);
    } else {
      answer += s[i];
    }
  }
  return answer;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));
