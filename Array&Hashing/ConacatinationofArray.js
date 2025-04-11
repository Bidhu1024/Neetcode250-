/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr2 = [...nums]

    let finalArr = nums.concat(arr2)
    return finalArr
};