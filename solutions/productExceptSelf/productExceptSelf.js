var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
    res[n - 1 - i] *= right;
    right *= nums[n - 1 - i];
  }
  return res;
};
