var removeDuplicates = (num) => {
  let i = 0; // 중복된 요소를 제거하고 새로운 배열을 만들 위치를 지정하는 인덱스
  for (let j = 1; j < num.length; j++) {
    // 두 번째 요소부터 배열을 탐색
    if (num[j] != num[i]) num[++i] = num[j];
  }
  return ++i;
};

console.log(removeDuplicates([[1, 1, 2]]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
