/* 41. First Missing Positive
Hard
Topics
premium lock icon
Companies
Hint
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1 */


// patern by Geminai
/* const firstMissingPositive = (nums) => {
    const n = nums.length;

    // Use the array as a hash map to place numbers in their correct positions.
    for (let i = 0; i < n; i++) {
        // We want to place nums[i] at index nums[i] - 1.
        // We also need to check if the number is within the range [1, n] and
        // if the number at the target index is not already the correct number
        // to avoid infinite loops with duplicate values.
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const correctIndex = nums[i] - 1;
            // Swap the numbers.
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }

    // After the first loop, the array is partially sorted.
    // The first index i where nums[i] is not i + 1 is the missing positive integer.
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers from 1 to n are present, the smallest missing positive
    // integer is n + 1.
    return n + 1;
};
 */





console.log(firstMissingPositive([1,2,0]));
