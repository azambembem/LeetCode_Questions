var lengthOf_L_W = (s) => {
  let arr = s.split(" ").filter((e) => e !== "");
  return arr[arr.length - 1].length;
};

console.log(lengthOf_L_W((s = "Hello World")));
console.log(lengthOf_L_W((s = "   fly me   to   the moon  ")));
console.log(lengthOf_L_W((s = "luffy is still joyboy")));
