// Valid Parentheses

const isValid = (x) => {
  if (x.length % 2 !== 0) return false;

  const pairs = { "{": "}", "[": "]", "(": ")" };
  let stack = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "{" || x[i] === "[" || x[i] === "(") {
      stack.push(x[i]);
      continue;
    }

    if (pairs[stack[stack.length - 1]] === x[i]) {
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length === 0;
};

console.log(isValid("()"));

console.log(isValid("()[]{}"));

console.log(isValid("(]"));
