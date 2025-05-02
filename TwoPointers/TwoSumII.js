

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //solved in brute-force since no with tc - o(n^2) and sc - 0(1)


//   for(let i = 0;i<numbers.length;i++){
//     for(let j = i+1;j<numbers.length;j++){
//         if(numbers[i]+numbers[j] === target){
//             return [i+1,j+1]
//         }
//     }
//   }  

//timecomplexity - 0(n) space  complexity - 0(1)
let left = 0;
let right = nums.length - 1;

while(left < right){
    if(nums[left] + nums[right] === target){
        return [left+1,right+1] // since it is 1 index based 
    }else if(nums[left] + nums[right] < target){
        left++;
    }else {
        right--
    }
}
};