// 1.Two Sum

var twoSum = function(nums, target) {
    // 배열을 반복하여 두 수의 합이 목표값과 같은지 확인
    for (let i = 0; i < nums.length; i++) {
        // 현재 인덱스 이후의 모든 요소들과의 합을 확인
        for (let j = i+1; j < nums.length; j++) {
            // 두 수의 합이 목표값과 같다면 해당 인덱스들을 반환
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};