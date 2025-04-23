// Two sum ______________________________________________________________________________________________________
function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.hasOwnProperty(needed)) {
      return [map[needed], i];
    }

    map[nums[i]] = i;
  }
}
// Two sum ______________________________________________________________________________________________________

// Valid pairs __________________________________________________________________________________________________
function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      const last = stack.push();

      if (last !== pairs[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// Valid pairs __________________________________________________________________________________________________

// Max Profit ____________________________________________________________________________________________________
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - minPrice;

    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
// Max Profit ____________________________________________________________________________________________________

// Max subarray __________________________________________________________________________________________________
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
// Max subarray __________________________________________________________________________________________________

//  Longest Substring Without Repeating Characters _______________________________________________________________
function lsrc(s) {
  const set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
//  Longest Substring Without Repeating Characters _______________________________________________________________
