# ds\_-_algo

This repositiory will contain the solution for the data structures and algorithms problems from leetcode, hackerrand and other popular sites like these.

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9\
Output: [0,1]\
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6\
Output: [1,2]

Example 3:\
Input: nums = [3,3], target = 6\
Output: [0,1]

Constraints:

2 <= nums.length <= 104\
-109 <= nums[i] <= 109\
-109 <= target <= 109\
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

Solution is :

```
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length - 1; index++) {
    const diffIndex = nums.indexOf(target - nums[index], index + 1);
    if (diffIndex > -1) {
      return [index, diffIndex];
    }
  }
};
```

2. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:\
Input: nums = [1,2,3,1]\
Output: true

Example 2:\
Input: nums = [1,2,3,4]\
Output: false

Example 3:\
Input: nums = [1,1,1,3,3,4,3,2,4,2]\
Output: true

Constraints:

1 <= nums.length <= 105 \
-109 <= nums[i] <= 109

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return (new Set(nums)).size !== nums.length;
};
```

3. Product of Array Except Self

```
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
```

4. Best Time to Buy and Sell Stock

```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let l = 0; r =1;
    let maxProfit = 0;

    while(r < prices.length){
        if(prices[r] > prices[l]){
            profit = prices[r] - prices[l];
            if(maxProfit < profit ){
                maxProfit = profit;
            }
        }else{
             l = r;
        }
        r++;
    }
    return maxProfit;
};
```

5. Valid Parentheses

```
var isValid = function (s) {
  var stack = [];
  let closedParenthesis = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (i = 0; i < s.length; i++) {
    if (closedParenthesis[s[i]]) {
      if (stack[stack.length - 1] === closedParenthesis[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? false : true;
};

```
