/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return;

  let uniqueElements = 0;
  let uniqueArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      uniqueArr.push(nums[i]);
      // nums[uniqueElements] = nums[i];
      uniqueElements++;
    }
  }
  return [uniqueElements, uniqueArr ];
};

console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 6));
