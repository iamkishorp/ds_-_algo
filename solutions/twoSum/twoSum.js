/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length - 1; index++) {
    const diffIndex = nums.indexOf(target - nums[index], index + 1);
    if (diffIndex > -1) {
      return [index, diffIndex];
    }
  }
};
