/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (nums.length === 1) return nums
let freqMap = new Map();

for(let num of nums){
    freqMap.set(num,(freqMap.get(num)|| 0)+ 1);
}

let sortedArr = [...freqMap.entries()].sort((a,b)=>b[1]-a[1]);
return sortedArr.slice(0,k).map(entry=>entry[0])


};