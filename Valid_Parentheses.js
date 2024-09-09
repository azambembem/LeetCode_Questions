const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];

    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else if (s[i] === ")" && top === "(" && stack.length !== 0) stack.pop();
    else if (s[i] === "]" && top === "[" && stack.length !== 0) stack.pop();
    else if (s[i] === "}" && top === "{" && stack.length !== 0) stack.pop();

    return false;
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true

console.log(isValid("()[]{}")); // true

console.log(isValid("(]")); //false

// String -> Array - Map, ForEach, reduce - X
// String -> For

// If else -> if - else
// IF else -> X -> returnchecking value is pretty same

// s[i] === "}"
// s[i] === ")"
switch (s[i]) {
  case "}":
    return "asas";
  case ")":
    return "asas";
}
