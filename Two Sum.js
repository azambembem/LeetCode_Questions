// // 1.Two Sum

// var twoSum = function(nums, target) {
//     // 배열을 반복하여 두 수의 합이 목표값과 같은지 확인
//     for (let i = 0; i < nums.length; i++) {
//         // 현재 인덱스 이후의 모든 요소들과의 합을 확인
//         for (let j = i+1; j < nums.length; j++) {
//             // 두 수의 합이 목표값과 같다면 해당 인덱스들을 반환
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// const ROMAN = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

// var intToRoman = function(num) {
//     let str = '';
//     for (let s of Object.keys(ROMAN)) {
//         const r = Math.floor(num / ROMAN[s]);
//         num -= r * ROMAN[s];
//         str += s.repeat(r);
//     }
//     return str;
// }

// console.log(intToRoman(50));

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// var removeDuplicates = function (nums) {
//   const removeDublication = nums.filter((v, i, a) => a.indexOf(v) < i);
// };
// const dubplicationRmover = (nums) => {
//   const result = Array.from(new Set(nums));

//   for (let i = result.length - 1; i < nums.length; i++) result.push("_");

//   return result;
// };
// console.log(dubplicationRmover([0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]));
